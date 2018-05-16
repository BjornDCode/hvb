
(function() {

    const navContainer = document.querySelector('.nav');
    const navToggle = navContainer.querySelector('.nav__toggle');
    const navExtraToggle = navContainer.querySelector('.nav__extra-toggle');
    const nav = navContainer.querySelector('nav');
    const extraNav = navContainer.querySelector('nav .extra');

    navToggle.addEventListener('click', toggleNav);
    navExtraToggle.addEventListener('click', toggleExtraNav);

    function toggleNav() {
        nav.classList.toggle('visible');
        navToggle.classList.toggle('active');
    }

    function toggleExtraNav() {
        extraNav.classList.toggle('visible');
        navExtraToggle.classList.toggle('active');
    }

})()
