$(document).ready(function(){
    let currentIndex = 0;
    const images = $('.carousel img');
    const imageCount = images.length;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        $('.carousel').css('transform', 'translateX(' + offset + 'vw)');
    }

    $('.next').click(function(){
        if (currentIndex < imageCount - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    $('.prev').click(function(){
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = imageCount - 1;
        }
        updateCarousel();
    });
});
