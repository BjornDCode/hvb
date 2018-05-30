(function() {

    if (document.querySelector('.designers')) {
        const groups = document.querySelectorAll('.group');
        // const designers = document.querySelectorAll('.designers a');
        const input = document.querySelector('.designers__search input');

        input.addEventListener('keyup', filterDesigners);

        function filterDesigners(e) {
            groups.forEach(group => {
                const designers = group.querySelectorAll('a');
                designers.forEach(designer => {
                    if (designer.dataset.value.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1) {
                        designer.classList.remove('hidden');
                        return
                    } 
                    designer.classList.add('hidden');
                })

                if (Array.from(designers).filter( designer => !designer.classList.contains('hidden') ).length ) {
                    group.classList.remove('hidden');
                } else {
                    group.classList.add('hidden');
                }
            });
        }

    }

})();
