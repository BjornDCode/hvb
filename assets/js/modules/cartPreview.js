(function() {

    const cartPreview = document.querySelector('.cart-preview');
    const toggle = document.querySelector('.cart-preview__toggle');

    toggle.addEventListener('click', toggleCartPreview);

    function toggleCartPreview() {
        cartPreview.classList.toggle('open');
    }

})();
