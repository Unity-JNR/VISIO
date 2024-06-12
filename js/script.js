$(document).ready(function() {
    var $carouselInner = $('.carousel-inner');
    var $items = $('.carousel-item');
    var currentIndex = 0;

    function showSlide(index) {
        if (index >= $items.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = $items.length - 1;
        } else {
            currentIndex = index;
        }
        $carouselInner.css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
    }

    $('.carousel-control-next').click(function(e) {
        e.preventDefault();
        showSlide(currentIndex + 1);
    });

    $('.carousel-control-prev').click(function(e) {
        e.preventDefault();
        showSlide(currentIndex - 1);
    });
});
