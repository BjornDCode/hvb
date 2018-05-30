import Siema from 'siema'

(function() {

     if (document.querySelector('.related-products-slider') && window.screen.width < 1024) {
        const slider = new Siema({
            selector: '.related-products-slider',
            loop: true
        })

    }


})();
