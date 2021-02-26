const isStartGuide = window.location.href.includes('start-developer');

if (isStartGuide) {
    const tabsMenu = document.querySelector('.devGuide__tabs');
    const tabs = document.querySelectorAll('.devGuide__tab');
    const distanceTop = tabsMenu.getBoundingClientRect().top;

    function changeTab(e) {
        const oldTab = document.querySelector('.devGuide__tab--selected')
        const newTab = e.target;

        oldTab.classList.remove('devGuide__tab--selected');
        newTab.classList.add('devGuide__tab--selected');
    }

    tabs.forEach(tab => tab.addEventListener('click', changeTab.bind(this)));
}

