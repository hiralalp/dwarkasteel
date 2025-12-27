(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});
    
    
    // Blogs carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

// brand slider 
$('.brand-slider').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: false,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// loader 

    // Hide the loader when the page is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        const loader = document.getElementById('steelLoader');
        window.addEventListener('load', () => {
            loader.style.display = 'none';
        });
    });
    

// clock
function updateCurrentTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    
    const period = hours >= 12 ? 'PM' : 'AM';
    
    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;  // The hour '0' should be '12'
    
    const currentTime = `${hours}:${minutes}:${seconds} ${period}`;

    document.getElementById('current-time').textContent = currentTime;
}

// Call the function every second to update the time
setInterval(updateCurrentTime, 1000);

// Initial call to set the time when the page is loaded
updateCurrentTime();

// calculator
/* Author: Rik Tamm-Daniels email: rtd@bu.edu

                            */
var focusflag = false;
var Factor = new Array(47);
Factor[0] = .3462;
Factor[1] = .3604;
Factor[2] = .3568;
Factor[3] = .3568;
Factor[4] = .3533;
Factor[5] = .3498;
Factor[6] = .3462;
Factor[7] = .3427;
Factor[8] = .3356;
Factor[9] = .3392;
Factor[10] = .3392;
Factor[11] = .3462;
Factor[12] = .3462;
Factor[13] = .3568;
Factor[14] = .3568;
Factor[15] = .3604;
Factor[16] = 1.030;
Factor[17] = 1.010;
Factor[18] = 1.132;
Factor[19] = 1.125;
Factor[20] = 1.121;
Factor[21] = 1.075;
Factor[22] = 1.072;
Factor[23] = 1.075;
Factor[24] = 1.012;
Factor[25] = 1.012;
Factor[26] = 1.037;
Factor[27] = 1.012;
Factor[28] = 1.030;
Factor[29] = 1.132;
Factor[30] = 1.012;
Factor[31] = .229;
Factor[32] = .236;
Factor[33] = .575;
Factor[34] = .812;
Factor[35] = .911;
Factor[36] = .911;
Factor[37] = 1.084;
Factor[38] = 1.095;
Factor[39] = 1.144;
Factor[40] = 1.303;
Factor[41] = 1.339;
Factor[42] = 1.448;
Factor[43] = 2.120;
Factor[44] = 2.462;
Factor[45] = 2.466;
var RoundOff = 5;

function ChangeLabel() {
    var formType = document.forms[0].form.options[document.forms[0].form.selectedIndex].text;
    if (formType == "Round") {
        document.forms[0].lbl1.value = "Diameter:";
        document.forms[0].lbl2.value = "Thickness";
        document.forms[0].lbl3.value = "Length:";
    } else if (formType == "Square" || formType == "Hexagonal" || formType == "Octagonal") {
        document.forms[0].lbl1.value = "Diameter:";
        document.forms[0].lbl2.value = "";
        document.forms[0].lbl3.value = "Length:";
    } else if (formType == "Flat" || formType == "Sheet" || formType == "Plate") {
        document.forms[0].lbl1.value = "Thickness:";
        document.forms[0].lbl2.value = "Width:";
        document.forms[0].lbl3.value = "Length:";
    } else if (formType == "Tubular") {
        document.forms[0].lbl1.value = "Outer Diameter:";
        document.forms[0].lbl2.value = "Wall:";
        document.forms[0].lbl3.value = "Length:";
    } else if (formType == "Circular") {
        document.forms[0].lbl1.value = "Diameter:";
        document.forms[0].lbl2.value = "";
        document.forms[0].lbl3.value = "Thickness:";
    } else if (formType == "Ring") {
        document.forms[0].lbl1.value = "Outer Diameter:";
        document.forms[0].lbl2.value = "Inner Diameter:";
        document.forms[0].lbl3.value = "Thickness:";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    ChangeLabel();
    ClearFields();
});

