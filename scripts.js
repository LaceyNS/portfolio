const portfolio = {};

portfolio.init = function() {
    //show name of skill icons on hover
    $('.skill').hover(function() {
        $(this).find('p').toggleClass('visuallyhidden');
        }
    )

    //show name of skill on tab focus
    $('.skill').on('focusin', function () {
        $(this).find('p').toggleClass('visuallyhidden');
    });

    //show name of skill if on device smaller than 1000px width
    if ((window.innerWidth < 1000)) {
        $('p').removeClass('visuallyhidden');
        $('i').removeClass('visuallyhidden');
    }

    //smooth scroll on a tags
    $(document).on("click", 'a[href^="#"]', function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top,
            },
        900
        );
    });
}

//Animate on Scroll initialize
AOS.init({
        duration: 900,
})

//document ready
$(function(){
    portfolio.init();
    AOS.init();
})