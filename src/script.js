// measure scroll from top to make navbar sticky
window.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const stickyOffset = navbar.offsetTop;

  const placeholder = document.createElement('div');
  placeholder.className = 'sticky-placeholder';
  navbar.parentNode.insertBefore(placeholder, navbar);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= stickyOffset) {
      navbar.classList.add('sticky');
      placeholder.style.height = navbar.offsetHeight + 'px';
    } else {
      navbar.classList.remove('sticky');
      placeholder.style.height = '0px';
    }
  });
});

// new animations for new landing page
import { animate, onScroll, createAnimatable, utils } from 'animejs';

