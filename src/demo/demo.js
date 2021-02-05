// Import SCSS
import './demo.scss';
import './components/banner/banner.scss';
import './components/cta/cta.scss';
import './components/header/header.scss';
import './components/menu/menu.scss';
import './components/textimage/textimage.scss';
import './components/parallax/parallax.scss';

// Import JS
import './components/parallax/parallax';

window.addEventListener('load', () => {
    document.querySelector('body').classList.add('loaded');

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
      const parallax = document.querySelector('.parallax__image');
      const parallaxSrc = parallax.dataset.src;

      parallax.src = parallaxSrc;
    }


});
