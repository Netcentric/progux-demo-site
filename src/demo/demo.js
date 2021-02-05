// Import SCSS
import './demo.scss';
import './components/banner/banner.scss';
import './components/cards/cards.scss';
import './components/cta/cta.scss';
import './components/header/header.scss';
import './components/menu/menu.scss';
import './components/textimage/textimage.scss';
import './components/textblock/textblock.scss';
import './components/parallax/parallax.scss';

// Import JS

window.addEventListener('load', () => {
  function debounce(func, wait, immediate) {
    let timeout;
    return function () {
      const context = this, args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const progUXClasses = Array.from(document.getElementsByTagName('html')[0].classList);
  const parallaxBlockingClasses = ['reducedMotion-true', 'saveData-true', 'connectionSpeed-slow', 'cpuLevel-low', 'memoryLevel-low'];
  let hasParallaxBlocker = false;

  for (let i = 0; i < progUXClasses.length; i++) {
    if (parallaxBlockingClasses.includes(progUXClasses[i])) {
      hasParallaxBlocker = true;

      break;
    }
  }

  if (!hasParallaxBlocker) {
    let scrolled = window.scrollY;
    const parallaxComponent = document.getElementById('parallax');
    const parallaxImg = parallaxComponent.querySelector('img');
    let yOffset = window.width < 748 ? 100 : 200;

    const scrollFunction = debounce(() => {
      const direction = scrolled < window.scrollY ? 'up' : 'down';

      scrolled = window.scrollY;

      if (direction === 'up') {
        yOffset += 2;
      } else {
        yOffset -= 2;
      }

      parallaxImg.style.transform = `translate3d(-50%, ${yOffset}px, 0)`;
    }, 5);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', scrollFunction);
        } else {
          window.removeEventListener('scroll', scrollFunction);
        }
      });
    });

    const parallax = document.querySelector('.parallax__image');
    const parallaxSrc = parallax.dataset.src;

    parallax.src = parallaxSrc;

    observer.observe(parallaxComponent);
  }
});

const observerSettings = {
  rootMargin: '0px',
  threshold: 0.01
};
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      observer.unobserve(entry.target);

      entry.target.classList.add('loaded');
    }
  })

}, observerSettings);

sections.forEach(section => {
  observer.observe(section);
});
