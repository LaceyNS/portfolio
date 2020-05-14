const portfolio = {}


portfolio.init = function() {
    $('.skill').hover(function() {
        $(this).find('p').toggleClass('visuallyhidden');
        }
    )
    $('.skill').on('focusin', function () {
        $(this).find('p').toggleClass('visuallyhidden');
    });
}

$(function(){
    portfolio.init();
})