document.body.classList.remove('no-js');

const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.site-menu');
const yearNode = document.querySelector('[data-year]');
const mobileQuery = window.matchMedia('(max-width: 980px)');

const isMenuOpen = () => Boolean(menu && menu.classList.contains('is-open'));

const openMenu = () => {
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', 'true');
  menu.classList.add('is-open');
};

const closeMenu = ({ returnFocus = false } = {}) => {
  if (!toggle || !menu) return;
  toggle.setAttribute('aria-expanded', 'false');
  menu.classList.remove('is-open');
  if (returnFocus) {
    toggle.focus();
  }
};

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    if (isMenuOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  toggle.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    if (isMenuOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMenuOpen()) {
      closeMenu({ returnFocus: true });
    }
  });

  document.addEventListener('click', (event) => {
    if (!isMenuOpen()) return;
    if (menu.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  });

  mobileQuery.addEventListener('change', () => {
    closeMenu();
  });
}

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
