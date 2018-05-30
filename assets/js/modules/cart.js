(function() {

    let cart = document.querySelector('.cart');

    if (cart) {

        const decrementButtons = document.querySelectorAll('.decrement');
        const incrementButtons = document.querySelectorAll('.increment');

        decrementButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.target.parentNode.querySelector('input').stepDown()
            });
        }) 

        incrementButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.target.parentNode.querySelector('input').stepUp()
            });
        })

    }

})();
