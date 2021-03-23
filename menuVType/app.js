window.onload = function() {
    $("nav ul li").hover(
        function() {
            $(this).children("ul").stop().slideDown(100);
        },
        function() {
            $(this).children("ul").stop().slideUp(100);
        }
    );
}