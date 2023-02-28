function fixHPBanner() {
    let width;
    if( $(window).width() > 993) {
        width = $(window).width() / 4;
    } else {
        width = $(window).width() / 2;
    }

    let homeSlides = $(".banner__homepage .banner__item").length;

    let total = 64 + (homeSlides * 19) ;

    total = width - ( total / 2) + 17;

    setTimeout(function() { 
        $(".banner_prev").css("left", total + "px");
        $(".banner_next").css("right", total + "px");
    }, 100);    
} 
$(window).resize(function () { 

        fixHPBanner();

    });
$(document).ready(function () {
    
    Fancybox.bind("[data-fancybox]", {});

    fixHPBanner();

    $(".popup-activator").click(function (e) {

        $(this).closest(".popup-custom").children(".popup-content").css("display", "block");

    });

    $(".popup-content--close").click(function (e) { 

        e.preventDefault();
        
        $(this).closest(".popup-content").css("display", "none");
        
    });

    $('.banner__homepage').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:["<img src='img/arrow-right-white.png' alt='slider arrow' class='banner_prev'>","<img src='img/arrow-right-white.png' alt='slider arrow' class='banner_next'>"],
        margin:5,
        nav:true,
        dots:true
    });

    $('.news__slider').owlCarousel({
        items:2,
        loop:false,
        rewind:true,
        margin:20,
        nav:true,
        navText:["<img src='img/arrow-right-white.png' alt='slider arrow'>","<img src='img/arrow-right-white.png' alt='slider arrow'>"],
        dots:false,
        responsive : {
            0 : {
                items : 1,
            },
            993 : {
                items : 2,
            }
        }
    });

    $('.gallery__homepage').owlCarousel({
        items:1,
        margin:35,
        loop:true,
        rewind:true,
        nav:false,
        dots:false,
        autoplay:true, 
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive : {
            0 : {
                margin:15,
                items : 1,
                stagePadding: 50,
            },
            576 : {
                items : 1,
                stagePadding: 150,
            },
            768 : {
                items : 2,
                stagePadding: 75,
            },
            993 : {
                items : 2,
                stagePadding: 100,
            },
            1200 : {
                items : 3,
                stagePadding: 100,
            },
            1600 : {
                items : 3,
                stagePadding: 150,
            }
        }
    });
});