import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const lastTimeRef = useRef(0);
  const isMobileRef = useRef(window.innerWidth < 768);
  const prefersReducedMotionRef = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Skip particle rendering if user prefers reduced motion
    if (prefersReducedMotionRef.current) {
      return;
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      isMobileRef.current = window.innerWidth < 768;
    };

    const initParticles = () => {
      const particleCount = Math.min(
        isMobileRef.current ? 25 : 100,
        Math.floor((canvas.width * canvas.height) / (isMobileRef.current ? 20000 : 12000))
      );
      particlesRef.current = [];

      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.4 + 0.15,
        });
      }
    };

    const animate = (currentTime: number) => {
      if (currentTime - lastTimeRef.current < 16) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouseInfluenceRadius = 150;
      const mouseForce = 0.02;
      const particles = particlesRef.current;

      // Optimize particle updates
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distSq = dx * dx + dy * dy;
        const distance = Math.sqrt(distSq);

        if (distance < mouseInfluenceRadius && distance > 0) {
          const force = (1 - distance / mouseInfluenceRadius) * mouseForce;
          p.vx -= (dx / distance) * force;
          p.vy -= (dy / distance) * force;
        }

        p.x += p.vx;
        p.y += p.vy;

        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        p.x = Math.max(0, Math.min(canvas.width, p.x));
        p.y = Math.max(0, Math.min(canvas.height, p.y));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(40, 30, 28, ${p.opacity})`;
        ctx.fill();
      }

      // Only draw lines on non-mobile devices
      if (!isMobileRef.current) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Inter-connecting network lines
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              const lineOpacity = (1 - dist / 120) * 0.12;
              ctx.strokeStyle = `rgba(40, 30, 28, ${lineOpacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }

          // Active mouse interactive lines
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseInfluenceRadius) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            const lineOpacity = (1 - distance / mouseInfluenceRadius) * 0.25;
            ctx.strokeStyle = `rgba(139, 58, 47, ${lineOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}