import { useEffect, useState } from 'react';

/**
 * Every decorative image in the voxel build is optional — the art is generated
 * by hand and dropped into /public later. These hooks probe an image once and
 * report whether it actually exists, so components can render a real fallback
 * instead of a broken-image icon or an empty frame.
 *
 * States: "loading" while probing, "ready" once decoded, "missing" on error.
 *
 * State is stored keyed by source and the result derived during render, so no
 * effect ever calls setState synchronously.
 */
export function useImageStatus(src) {
  const [resolved, setResolved] = useState({ src: null, status: 'loading' });

  useEffect(() => {
    if (!src) return undefined;

    let cancelled = false;
    const img = new Image();
    img.onload = () => !cancelled && setResolved({ src, status: 'ready' });
    img.onerror = () => !cancelled && setResolved({ src, status: 'missing' });
    img.src = src;

    return () => {
      cancelled = true;
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  if (!src) return 'missing';
  return resolved.src === src ? resolved.status : 'loading';
}

/** True once every listed image has resolved one way or the other. */
export function useImagesSettled(sources) {
  const key = sources.filter(Boolean).join('|');
  const [settledKey, setSettledKey] = useState(null);

  useEffect(() => {
    const list = key ? key.split('|') : [];
    if (list.length === 0) return undefined;

    let cancelled = false;
    let remaining = list.length;
    const done = () => {
      remaining -= 1;
      if (remaining === 0 && !cancelled) setSettledKey(key);
    };

    const imgs = list.map((src) => {
      const img = new Image();
      img.onload = done;
      img.onerror = done;
      img.src = src;
      return img;
    });

    return () => {
      cancelled = true;
      imgs.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [key]);

  return key === '' || settledKey === key;
}

/** Matches the user's reduced-motion preference, and keeps matching it. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

/** True while the element is intersecting the viewport. Used to park
 *  continuous animations whenever they are not actually on screen. */
export function useInViewport(ref, rootMargin = '200px') {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin]);

  return inView;
}
