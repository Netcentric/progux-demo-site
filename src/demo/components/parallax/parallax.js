let scrolled = window.scrollY;
const parallaxComponent = document.getElementById('parallax');
const parallaxImg = parallaxComponent.querySelector('img');
let yOffset = window.width < 748 ? 100 : 200;

function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

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

observer.observe(parallaxComponent);


