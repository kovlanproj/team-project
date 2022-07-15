(() => {
    const refs = {
        openMenuBtn: document.querySelector('.header__menu-open'),
        closeMenuBtn: document.querySelector('.header__menu-close'),
        menu: document.querySelector('.header__menu'),
        body: document.querySelector('body'),
        animation: document.querySelector('.animation'),
        openAnimation: document.querySelector('.header__menu-open'),
        closeAnimation: document.querySelector('.header__menu-close'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.openAnimation.addEventListener('click', toggleAnimation);
    refs.closeAnimation.addEventListener('click', toggleAnimation);

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
        refs.body.classList.toggle('no-scroll');
    }
    function toggleAnimation() {
        refs.menu.classList.toggle('animation');
    }
    })();