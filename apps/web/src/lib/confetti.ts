// Lightweight, zero-dependency canvas celebration burst
export interface ConfettiOptions {
  particleCount?: number;
  spread?: number;
  origin?: { x?: number; y?: number };
}

export default function triggerConfetti(options: ConfettiOptions = {}): void {
  if (typeof window === 'undefined') return;

  const count = options.particleCount || 40;
  const originX = options.origin?.x ?? 0.5;
  const originY = options.origin?.y ?? 0.6;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    document.body.removeChild(canvas);
    return;
  }

  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.scale(dpr, dpr);

  const colors = ['#059669', '#10B981', '#34D399', '#F59E0B', '#FBBF24', '#3B82F6', '#6366F1'];
  const particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    rotation: number;
    rotationSpeed: number;
    alpha: number;
  }> = [];

  const startX = window.innerWidth * originX;
  const startY = window.innerHeight * originY;

  for (let i = 0; i < count; i++) {
    const angle = (Math.random() - 0.5) * (Math.PI * (options.spread ? options.spread / 60 : 1.2)) - Math.PI / 2;
    const speed = 4 + Math.random() * 8;
    particles.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
      alpha: 1,
    });
  }

  let animationFrameId: number;
  const startTime = performance.now();
  const duration = 1500;

  function render(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    if (!ctx) return;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25; // gravity
      p.rotation += p.rotationSpeed;
      p.alpha = Math.max(0, 1 - progress);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    }

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      cancelAnimationFrame(animationFrameId);
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
    }
  }

  animationFrameId = requestAnimationFrame(render);
}
