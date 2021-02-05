// Import SCSS
import './demo.scss';
import './components/banner/banner.scss';
import './components/cards/cards.scss';
import './components/cta/cta.scss';
import './components/header/header.scss';
import './components/menu/menu.scss';

// Import JS

const observerSettings = {
    rootMargin: '0px',
    threshold: 0.01
};
const sections = document.querySelectorAll('section');
  
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            observer.unobserve(entry.target);

            console.log(entry);
            entry.target.classList.add('loaded');
        }
    })
    
}, observerSettings);

sections.forEach(section => {
    observer.observe(section);
});