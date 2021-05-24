window.onload = function() {
    $("nav > ul > li > ul > li").hide();
    $(".slide > div").hide();
    $(".popUp").hide();
    $("nav > ul > li").hover(
        function(e) {
            $("nav > ul > li").find("li").stop().slideDown();
            $(".slide > div").stop().slideDown();
        },
        function(e) {
            $("nav > ul > li").find("li").stop().slideUp();
            $(".slide > div").stop().slideUp();
        }
    )

    $("nav > ul > li > ul > li").hover(
        function(e) {
            $(e.currentTarget).css({"backgroundColor" : "bisque"});
        },
        function(e) {
            $(e.currentTarget).css({"backgroundColor" : "antiquewhite"});
        }
    )

    let idx = 0;
    $(".slide img").css({"top" : "-100%"});
    $(".slide img").eq(0).css({"top" : "0%"});
    setInterval(() => {
        let next = (idx +1) % 3;
        $(".slide > a > img").eq(next).css({"top" : "-100%"}).animate({"top" : "0%"});
        $(".slide > a > img").eq(idx).css({"top" : "0%"}).animate({"top" : "100%"});
        idx = next;
    }, 2000);
}

function openPop(){
    $(".popUp").show("fast");
}

function closePop(){
    $(".popUp").hide("fast");
}