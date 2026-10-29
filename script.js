// ---------- Sign-in / sign-up toggle + form guard ----------
const card = document.querySelector('.auth-card');

document.querySelectorAll('[data-mode]').forEach((button) => {
  button.addEventListener('click', () => {
    card.classList.toggle('signup', button.dataset.mode === 'signup');
  });
});

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (event) => event.preventDefault());
});

// ---------- Gentle pointer-parallax for ambient orbs ----------
// Disabled when the user prefers reduced motion.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const orbs = document.querySelectorAll('.orb');
  const shell = document.querySelector('.page-shell');
  let frame = null;

  shell.addEventListener('mousemove', (event) => {
    if (frame) return; // throttle to one rAF per frame
    frame = requestAnimationFrame(() => {
      const rect = shell.getBoundingClientRect();
      // -1 .. 1 from center
      const dx = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const dy = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      orbs.forEach((orb, i) => {
        // Each orb drifts a little, more for the closer ones.
        // We set --px/--py (consumed by the CSS @keyframes drift) rather
        // than transform, because the running animation owns `transform`.
        const depth = (i + 1) * 10;
        orb.style.setProperty('--px', `${(dx * depth).toFixed(1)}px`);
        orb.style.setProperty('--py', `${(dy * depth).toFixed(1)}px`);
      });
      frame = null;
    });
  });

  // Release the parallax bias when the pointer leaves, so the
  // orbs settle back to their neutral drift.
  shell.addEventListener('mouseleave', () => {
    orbs.forEach((orb) => {
      orb.style.setProperty('--px', '0px');
      orb.style.setProperty('--py', '0px');
    });
  });
}
