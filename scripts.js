const portfolio = {};

portfolio.init = function() {
    $('.skill').hover(function() {
        $(this).find('p').toggleClass('visuallyhidden');
        }
    )
    $('.skill').on('focusin', function () {
        $(this).find('p').toggleClass('visuallyhidden');
    });

    if ((window.innerWidth < 1000)) {
        $('p').removeClass('visuallyhidden');
        $('i').removeClass('visuallyhidden');
    }

    $(document).on("click", 'a[href^="#"]', function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top,
        },
        900
      );
    });
}

AOS.init({
        duration: 900,
})


$(function(){
    portfolio.init();
    AOS.init();
})