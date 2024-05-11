$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    })

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 60) {
            $('.header-2').addClass('header-active');
        } else {
            $('.header-2').removeClass('header-active');
        }

        $('.home-slider').owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 8000,
            loop: true
        });

        $('.small-image img').click(function () {

            $(this).addClass('image-active').siblings().removeClass('image-active');

            let image = $(this).attr('src')

            $('.main-image').attr('src', image);
        });

        $('.gallery .btn1 ').click(function () {

            let filter = $(this).attr('data-filter');
            if (filter == 'all') {
                $('.gallery .gallery-box').show(400);
            }
            else {

                $('.gallery .gallery-box').not('.' + filter).hide(200);

                $('.gallery .gallery-box').filter('.' + filter).show(400);
            }
        })
    });
});