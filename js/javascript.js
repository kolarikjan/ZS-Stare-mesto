
$(document).ready(function () {
    
    Fancybox.bind("[data-fancybox]", {});

    $('.partners-slider').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='img/arrow-banner-left.png' alt='arrow' class='partners-slider'><img src='img/arrow-banner-right.png' alt='arrow' class='partners-slider-hover'>","<img src='img/arrow-banner-left.png' alt='arrow' class='partners-slider'><img src='img/arrow-banner-right.png' alt='arrow' class='partners-slider-hover'>"],
        dots: false,
        margin:0,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:false
            },
            993:{
                items:3,
                nav:false
            },
            1200:{
                items:5,
                nav:false
            }
        }
    });
    
    const searchPopup = (e) => {
        e.preventDefault();
        let search = $(".header-search");
        if (search.hasClass("active")) {
            search.removeClass("active");
        } else {
            search.addClass("active");
        }
    }

    $(".header-buttons-item").click(function (e) { 
        searchPopup(e);
    });

    $(".header-search-close").click(function (e) { 
        searchPopup(e);
    });

});