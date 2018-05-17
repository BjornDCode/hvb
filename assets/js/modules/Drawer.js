class Drawer {

    constructor(className) {
        this.className = className;

        this.container = document.querySelector(`.collection__${this.className}`);

        if (this.container) {
            this.bindNodes();
            this.bindEventListeners();
            this.initSwiping();
        }
    }

    bindNodes() {
        this.body = document.querySelector('body');
        this.toggleButton = document.querySelector(`.${this.className}__toggle`);
        this.closeButton = document.querySelector(`.${this.className}__close`);
    }

    bindEventListeners() {
        this.toggleButton.addEventListener('click', this.toggleSorting.bind(this));
        this.closeButton.addEventListener('click', this.toggleSorting.bind(this));
        this.container.addEventListener('click', this.handleSortingContainerClick.bind(this));
    }

    toggleSorting(e) {
        this.body.classList.toggle('no-scroll');
        this.container.classList.toggle('visible');
    }

    handleSortingContainerClick(e) {
        if (e.currentTarget === e.target) {
            this.toggleSorting();
        }
    }

    initSwiping() {
        this.touchstartX = 0;
        this.touchendX = 0;

        this.swipeZone = this.container.querySelector('.inner-container');

        this.bindSwipeEvents();

    }

    bindSwipeEvents() {
        this.swipeZone.addEventListener('touchstart', e => {
            this.touchstartX = e.touches[0].clientX;
        }, false);

        this.swipeZone.addEventListener('touchend', e => {
            this.touchendX = e.changedTouches[0].clientX;
            this.handleSwipe();
        }, false); 
    }

    handleSwipe() {
        if (this.touchendX > this.touchstartX) {
            this.toggleSorting();
        }
    }

}

export default Drawer;
