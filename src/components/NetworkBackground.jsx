import React, { useRef, useEffect } from 'react';

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let nodes = [];
    const nodeCount = 30; /* Hard limit for maximum guaranteed performance */
    const connectionRadiusSq = 180 * 180;
    
    // Performance: Pause rendering completely while scrolling
    let isScrolling = false;
    let scrollTimeout = null;

    const handleScroll = () => {
      isScrolling = true;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 100); // Resume animation after scroll stops
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    resize();

    // Initialize Nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() > 0.85 ? Math.random() * 3 + 2 : 1.5
      });
    }

    const animate = () => {
      // Pause drawing entirely if the user is scrolling, freeing up 100% of CPU for smooth scroll!
      if (!isScrolling) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update Nodes
      for (let i = 0; i < nodeCount; i++) {
        let node = nodes[i];
        
        node.x += node.vx;
        node.y += node.vy;
        
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw square node (like screenshot)
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(node.x - node.size/2, node.y - node.size/2, node.size, node.size);
        
        // Connect to neighbors
        for (let j = i + 1; j < nodeCount; j++) {
          const neighbor = nodes[j];
          const dx = node.x - neighbor.x;
          const dy = node.y - neighbor.y;
          const distSq = dx * dx + dy * dy;
          
          if (distSq < connectionRadiusSq) {
            const dist = Math.sqrt(distSq);
            const opacity = (1 - (dist / 180)) * 0.15; 
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(neighbor.x, neighbor.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      } // End if (!isScrolling)
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        transform: 'translateZ(0)', /* Force Hardware Acceleration */
        willChange: 'transform'
      }}
    />
  );
}
