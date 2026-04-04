// ── NAV scroll effect ──
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile menu ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ── Typewriter ──
const roles = [
  'AI-powered backends.',
  'IoT systems.',
  'full-stack web apps.',
  'REST APIs.',
  'things that matter.'
];
let ri = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const current = roles[ri];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ci + 1);
    ci++;
    if (ci === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, ci - 1);
    ci--;
    if (ci === 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
    }
  }
  setTimeout(type, deleting ? 45 : 90);
}
setTimeout(type, 1200);

// ── Scroll reveal ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));