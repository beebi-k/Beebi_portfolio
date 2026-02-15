import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const BackgroundAnimation = () => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const shapesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
      initShapes();
    };

    // Premium color palette - vibrant and visible in both themes
    const colors = {
      primary: '#60a5fa',    // Blue-400
      secondary: '#a78bfa',  // Purple-400
      tertiary: '#f472b6',   // Pink-400
      quaternary: '#34d399', // Emerald-400
      darkBg: '#0f172a',     // Slate-900
      lightBg: '#f0f9ff',    // Sky-50
    };

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colorArray = [colors.primary, colors.secondary, colors.tertiary, colors.quaternary];
        return colorArray[Math.floor(Math.random() * colorArray.length)];
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speedX = (Math.random() * 1 - 0.5) * 0.5;
        this.speedY = (Math.random() * 1 - 0.5) * 0.5;
        this.opacity = Math.random() * 0.7 + 0.4;
        this.targetOpacity = this.opacity;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update(time) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        this.opacity = this.targetOpacity + Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.2;

        // Mouse interaction
        const dx = mousePosition.x - this.x;
        const dy = mousePosition.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200 && distance > 0) {
          const force = (200 - distance) / 200;
          this.x += (dx / distance) * force * 0.5;
          this.y += (dy / distance) * force * 0.5;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
    }

    // Floating shape class
    class FloatingShape {
      constructor() {
        this.reset();
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colorArray = [colors.primary, colors.secondary, colors.tertiary, colors.quaternary];
        return colorArray[Math.floor(Math.random() * colorArray.length)];
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 200 + 100;
        this.speedX = (Math.random() * 0.5 - 0.25) * 0.3;
        this.speedY = (Math.random() * 0.5 - 0.25) * 0.3;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() * 1 - 0.5) * 0.2;
        this.type = Math.random() > 0.5 ? 'circle' : 'square';
        this.opacity = Math.random() * 0.2 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        const margin = this.size * 2;
        if (this.x > canvas.width + margin) this.x = -margin;
        if (this.x < -margin) this.x = canvas.width + margin;
        if (this.y > canvas.height + margin) this.y = -margin;
        if (this.y < -margin) this.y = canvas.height + margin;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        
        ctx.beginPath();
        if (this.type === 'circle') {
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        } else {
          ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
        }
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size / 2);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = this.opacity * 0.5;
        ctx.stroke();
        
        ctx.globalAlpha = 1;
        ctx.restore();
      }
    }

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < Math.max(particleCount, 100); i++) {
        particlesRef.current.push(new Particle());
      }
    };

    const initShapes = () => {
      shapesRef.current = [];
      const shapeCount = 10;
      for (let i = 0; i < shapeCount; i++) {
        shapesRef.current.push(new FloatingShape());
      }
    };

    const drawConnections = (particles) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            const opacity = (1 - distance / 180) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Gradient connection
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, particles[i].color);
            gradient.addColorStop(1, particles[j].color);
            
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = opacity;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    const drawMouseConnections = (particles) => {
      for (const particle of particles) {
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 250) {
          const opacity = (1 - distance / 250) * 0.4;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mousePosition.x, mousePosition.y);
          
          const gradient = ctx.createLinearGradient(
            particle.x, particle.y,
            mousePosition.x, mousePosition.y
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(1, colors.primary);
          
          ctx.strokeStyle = gradient;
          ctx.globalAlpha = opacity;
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    };

    let time = 0;
    const animate = () => {
      time += 1;
      
      // Premium gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      if (theme === 'dark') {
        bgGradient.addColorStop(0, '#0f172a');
        bgGradient.addColorStop(0.3, '#1e1b4b');
        bgGradient.addColorStop(0.6, '#312e81');
        bgGradient.addColorStop(1, '#0f172a');
      } else {
        bgGradient.addColorStop(0, '#f0f9ff');
        bgGradient.addColorStop(0.3, '#e0e7ff');
        bgGradient.addColorStop(0.6, '#fce7f3');
        bgGradient.addColorStop(1, '#f0f9ff');
      }
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw floating shapes
      shapesRef.current.forEach((shape) => {
        shape.update();
        shape.draw();
      });

      // Update and draw particles
      const particles = particlesRef.current;
      particles.forEach((particle) => {
        particle.update(time);
        particle.draw();
      });

      // Draw connections
      drawConnections(particles);
      drawMouseConnections(particles);

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePosition, theme]);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      onMouseMove={handleMouseMove}
      style={{ background: 'transparent' }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default BackgroundAnimation;