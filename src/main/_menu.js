const initMenu = () => {
  setTimeout(() => {
    const menuButton = document.querySelector('.menubutton__base');

    if (menuButton) {
      menuButton.addEventListener('click', () => {
        const header = document.getElementsByTagName('header')[0];
        const isOpen = header.classList.contains('menu--open');

        if (isOpen) {
          header.classList.remove('menu--open');

          return;
        }

        header.classList.add('menu--open');
      });
    }
  }, 100);
};

initMenu();
