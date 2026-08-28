// ==========================================================================
// POLISH POINT — LUXURY IPHONE GLASS LINK HUB (MICRO-INTERACTIONS)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.glass-container');
  const buttons = document.querySelectorAll('.glass-btn, .btn-whatsapp, .social-icon-btn');

  // Subtle 3D Glass Tilt reaction on mouse move (Desktop only for performance)
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && container) {
    let isMoving = false;

    window.addEventListener('mousemove', (e) => {
      if (!isMoving) {
        window.requestAnimationFrame(() => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          
          const xPercent = (clientX / innerWidth) - 0.5;
          const yPercent = (clientY / innerHeight) - 0.5;
          
          const tiltX = -(yPercent * 6).toFixed(2);
          const tiltY = (xPercent * 6).toFixed(2);
          
          container.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
          isMoving = false;
        });
        isMoving = true;
      }
    });

    // Reset tilt on mouse leave
    document.addEventListener('mouseleave', () => {
      if (container) {
        container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
    });
  }

  // Smooth tactile feedback for mobile touch events
  buttons.forEach(btn => {
    btn.addEventListener('touchstart', () => {
      btn.style.transition = 'transform 0.1s ease';
      btn.style.transform = 'scale(0.97)';
    }, { passive: true });

    btn.addEventListener('touchend', () => {
      btn.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
      btn.style.transform = '';
    }, { passive: true });

    btn.addEventListener('touchcancel', () => {
      btn.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
      btn.style.transform = '';
    }, { passive: true });
  });
});
