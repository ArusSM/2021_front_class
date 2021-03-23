window.onload = function() {

    $("nav > ul > li > ul").hide();
    $("nav ul li").hover(
        function() {
            $(this).children("ul").stop().slideDown(200);
        },
        function() {
            $(this).children("ul").stop().slideUp(200);
        }
    );
}