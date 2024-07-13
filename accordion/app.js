document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            const currentlyActiveItem = document.querySelector('.accordion-item.active');
            const currentlyActiveBody = document.querySelector('.accordion-body.active');

            if (currentlyActiveItem && currentlyActiveItem !== this.parentElement) {
                currentlyActiveItem.classList.remove('active');
                currentlyActiveBody.classList.remove('active');
            }

            this.parentElement.classList.toggle('active');
            document.querySelectorAll('.accordion-body')[index].classList.toggle('active');
        });
    });

    // Optional: Set the first accordion item to be active by default
    const firstItem = document.querySelector('.accordion-item');
    if (firstItem) {
        firstItem.classList.add('active');
        const firstBody = firstItem.querySelector('.accordion-body');
        if (firstBody) {
            firstBody.classList.add('active');
        }
    }
});

