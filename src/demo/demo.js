// Import SCSS
import './demo.scss';
import './components/banner/banner.scss';
import './components/cards/cards.scss';
import './components/cta/cta.scss';
import './components/header/header.scss';
import './components/menu/menu.scss';
import './components/textblock/textblock.scss';
import './components/parallax/parallax.scss';

// Import JS
import './components/parallax/parallax';

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
