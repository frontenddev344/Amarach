AOS.init({
    duration: 1200,
})

//  sticky
$(document).ready(function () {
    $(window).scroll(function () {
        var header = $("header");
        header.toggleClass("sticky", $(window).scrollTop() > 100);
    });
});
// header js
$(document).ready(function (e) {
    $(".mobile-button").click(function (event) {
        $(".navigation_link").toggleClass("mobile-open");
        event.stopPropagation();
    });

    $(document).click(function (event) {
        if (!$(event.target).hasClass('link')) {
            $(".navigation_link").removeClass("mobile-open");
        }
    });
});

// owl-carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false,
            loop: true
        }
    }
})