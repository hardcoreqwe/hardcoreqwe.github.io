window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});



$(document).ready(function() {
    $('.carousele__inner').slick({
        infinite: true,
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/Photo/slider/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/Photo/slider/right.svg"></button>',
        adaptiveHeight: true,
        adaptiveWidth: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    adaptiveHeight: false,
                    adaptiveWidth: true,
                    variableWidth: true,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                }
            }
        ]
    });

    $('ul.blog__tabs').on('click', 'li:not(.blog__tab_active)', function() {
        $(this)
          .addClass('blog__tab_active').siblings().removeClass('blog__tab_active')
          .closest('div.container').find('div.blog__content').removeClass('blog__content_active').eq($(this).index()).addClass('blog__content_active');
    });

    $('[data-modal=price').on('click', function() {
        $('.overlay, #price').fadeIn();
    });

//POPUPI ================

    $('#learn-title-1, #learn-btn-1').on('click', function () {
        $('.overlay, #popup-eyebrows').fadeIn();
        $('.body').addClass('modal-open');
    });

    $('#learn-title-2, #learn-btn-2').on('click', function () {
        $('.overlay, #popup-lips').fadeIn();
        $('.body').addClass('modal-open');
    });

    $('#learn-title-3, #learn-btn-3').on('click', function () {
        $('.overlay, #popup-eyes').fadeIn();
        $('.body').addClass('modal-open');
    });

    $('#learn-title-4, #learn-btn-4').on('click', function () {
        $('.overlay, #popup-all').fadeIn();
        $('.body').addClass('modal-open');
    });

    $('#learn-title-5, #learn-btn-5').on('click', function () {
        $('.overlay, #popup-micro').fadeIn();
        $('.body').addClass('modal-open');
    });

    $('#learn-title-6, #learn-btn-6').on('click', function () {
        $('.overlay, #popup-allmicro').fadeIn();
        $('.body').addClass('modal-open');
    });

    $('#learn-title-7, #learn-btn-7').on('click', function () {
        $('.overlay, #popup-qualification').fadeIn();
        $('.body').addClass('modal-open');
    });

//KONEC POPUPOV =============

    $('#popup-btn-1, #popup-btn-2, #popup-btn-3, #popup-btn-4, #popup-btn-5, #popup-btn-6, #popup-btn-7, #popup-btn-8').on('click', function () {
        $('.popup').fadeOut(),
        $('#price').fadeIn();
    });

    $('#callback-btn, #callback-btn-small').on('click', function() {
        $('.overlay, #callback').fadeIn();
    });

    $('.overlay').on('click', function () {
        $('.overlay, #price, #callback, #thanks, #popup-allmicro, #popup-micro, #popup-all, #popup-qualification, #popup-eyes, #popup-lips, #popup-eyebrows').fadeOut();
    });

    $("#callback-btn-small").click(function() {
        $(".menu").removeClass("menu_active");
    });

    $("#callback-btn-small").click(function() {
        $(".hamburger").removeClass("hamburger_active");
    });

    $('.modal__close, .popup__close, popup_m__close').on('click', function() {
        $('.overlay, #price, #callback, #thanks, #popup-allmicro, #popup-micro, #popup-all, #popup-qualification, #popup-eyes, #popup-lips, #popup-eyebrows').fadeOut();
    });

//SMOOTH SCROLL

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        };
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    $(".button_main").hover(function (e) {
        $(this).addClass('animate__animated animate__headShake');
    });
    
    $(".button_main").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
        $(this).removeClass('animate__animated animate__headShake');
    });

    $(".learning_btn").hover(function (e) {
        $(this).addClass('animate__animated animate__pulse');
    });
    
    $(".learning_btn").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
        $(this).removeClass('animate__animated animate__pulse');
    });

    new WOW().init();
});