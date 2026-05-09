// Trust demo interactions
// Keeps behavior intentionally lightweight for a static Bootstrap-free demo.

const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
