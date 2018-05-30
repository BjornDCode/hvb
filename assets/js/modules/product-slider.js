import Siema from 'siema'

(function() {
    
    if (document.querySelector('.product-slider')) {

        let paginationItems = document.querySelectorAll('.product-slider__pagination span');
        const buttonNext = document.querySelector('.next');
        const buttonPrev = document.querySelector('.prev');

        const slider = new Siema({
            selector: '.product-slider',
            loop: true,
            onInit: setActivePaginationItem,
            onChange: setActivePaginationItem
        })

        function setActivePaginationItem() {
            paginationItems.forEach((span, i) => {
                if (i === this.currentSlide) {
                    span.classList.add('active');
                    return 
                }
                span.classList.remove('active');
            })
        }

        buttonNext.addEventListener('click', () => slider.next());
        buttonPrev.addEventListener('click', () => slider.prev());
        // Code goes here
    }

})();


