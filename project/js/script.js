
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});

$(document).ready(function() {
    new Typed('#type-it', {
        strings: ['student','I\' m a student','At IAP Dep','In Fssm'],
        typeSpeed: 100,
        loop: true,
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 2,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            }
        }
    });

    $('.logo-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false, 
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

}); // Fin du $(document).ready