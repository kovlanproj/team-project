(() => {
    const refs = {
        openMenuBtn: document.querySelector('.header__menu-open'),
        closeMenuBtn: document.querySelector('.header__menu-close'),
        menu: document.querySelector('[data-menu]'),
        menuopen: document.querySelector('[data-menu-open]'),
        body: document.querySelector('body'),
        animation: document.querySelector('.animation'),
        openAnimation: document.querySelector('.header__menu-open'),
        closeAnimation: document.querySelector('.header__menu-close'),
        animationClose: document.querySelector('.animation-close'),
        openAnimationClose: document.querySelector('.header__menu-open'),
        closeAnimationClose: document.querySelector('.header__menu-close'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.openAnimation.addEventListener('click', toggleAnimation);
    refs.closeAnimationClose.addEventListener('click', toggleAnimation);
    refs.openAnimationClose.addEventListener('click', toggleAnimationClose);
    refs.closeAnimationClose.addEventListener('click', toggleAnimationClose);

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
        refs.body.classList.toggle('no-scroll');
    }
    function toggleAnimation() {
        refs.menuopen.classList.toggle('animation');
    }
    function toggleAnimationClose() {
        refs.menuopen.classList.toggle('animation-close');
    }
    })();