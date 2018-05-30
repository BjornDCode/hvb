import Drawer from './Drawer';

(function() {

    new Drawer('filter');

    if (document.querySelector('.collection__filter') && window.screen.width >= 1024) {
        setTimeout(() => {
            const filterBlocks = document.querySelectorAll('.gf-option-block');
            filterBlocks.forEach(block => block.classList.add('is-collapsed'));
        }, 1000)
    }

})()
