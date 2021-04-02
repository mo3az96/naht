$(window).on('load', function () {
    $("body").removeClass("overflow");
});
$(document).ready(function () {
    ////////// ** Serach ** //////////
    $('.search-icon').click(function () {
        $(".search-cont").slideToggle(400);
        $(".search-icon").toggleClass("active");
    });

    ////////// ** Main Slider ** //////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
    });

    ////////// ** Lattest Slider ** //////////
    var lattestswiper = new Swiper('.lattest-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.lattest-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.lattest-slider .swiper-btn-next',
            prevEl: '.lattest-slider .swiper-btn-prev',
        },
        watchSlidesVisibility: true,

        breakpoints: {
            0: {
                slidesPerView: 1.75,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 0,
            },
        },
    });

    ////////// ** Bestseller Slider ** //////////
    var bestsellerswiper = new Swiper('.bestseller-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.bestseller-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.bestseller-slider .swiper-btn-next',
            prevEl: '.bestseller-slider .swiper-btn-prev',
        },
        watchSlidesVisibility: true,

        breakpoints: {
            0: {
                slidesPerView: 1.75,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 0,
            },
        },
    });

    ////////// ** Offers Slider ** //////////
    var bestsellerswiper = new Swiper('.offers-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.offers-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.offers-slider .swiper-btn-next',
            prevEl: '.offers-slider .swiper-btn-prev',
        },
        watchSlidesVisibility: true,
        breakpoints: {
            0: {
                slidesPerView: 1.75,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 0,
            },
        },
    });
    ////////// ** Arrow Top ** //////////
    $(".arrow-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });
    $(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(300) : $(".arrow-top").fadeOut(300);

    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(300) : $(".arrow-top").fadeOut(300);
    });
    ////////// ** Mobile Dropdown ** //////////
    if ($(window).width() <= 991) {
        $(".header-setting,.user-cont").click(function () {
            $(this).addClass("active");
            $(".opts-overlay").show();
        });
        $(".opts-overlay").click(function () {
            $(".header-setting,.user-cont").removeClass("active");
            $(".opts-overlay").hide();
        });
    }
    ////////// ** Mobile Menu ** //////////
    $('.menu-icon').click(function () {
        $("nav").addClass("nav-in");
        $("body").addClass("overflow");
    });
    $('.menu-close').click(function () {
        $("nav").addClass("nav-out");
        setTimeout(function () {
            $("nav").removeClass("nav-out");
            $("nav").removeClass("nav-in");
        }, 600);
        $("body").removeClass("overflow");
    });
    $('.cats-dropmenu>a').click(function () {
        $(".cats-dropmenu>a").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".cats-dropmenu>a").not(this).siblings().slideUp(500);
    })
});