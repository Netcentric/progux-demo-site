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
});
