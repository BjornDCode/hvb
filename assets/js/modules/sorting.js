import Drawer from './Drawer';

(function() {

        new Drawer('sort');

       
        // Sorting
        if (location.search.length) {
            for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
                aKeyValue = aCouples[i].split('=');
                if (aKeyValue.length > 1) {
                    Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
                }
            }
        }

        let currentlyChecked = document.querySelector('input[value="' + Shopify.queryParams.sort_by + '"]');

        if (currentlyChecked) {
            currentlyChecked.checked = true;
        }

        const radioButtons = document.querySelectorAll('input[name="sort"]');
        radioButtons.forEach(radioButton => {
            radioButton.addEventListener('click', function(e) {
                Shopify.queryParams.sort_by = e.target.value;
                location.search = serialize(Shopify.queryParams);
            });
        })

    
})()
