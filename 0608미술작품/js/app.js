window.onload = function(){
    $("nav > ul > li > ul").hide();
    $(".popUp").hide();
    $("nav > ul > li").hover(
        function(e) {
            $(e.currentTarget).find("ul").stop().slideDown();
        },
        function(e) {
            $(e.currentTarget).find("ul").stop().slideUp();
        }
    );

    $("nav > ul > li > ul > li").hover(
        function(e) {
            $(e.currentTarget).css({"backgroundColor" : "bisque"});
        },
        function(e) {
            $(e.currentTarget).css({"backgroundColor" : "antiquewhite"});
        }
    );
    
    $(".gallcon > a > img").hover(
        function(e) {
            $(e.currentTarget).css({"opacity" : "100%"});
        },
        function(e) {
            $(e.currentTarget).css({"opacity" : "50%"});
        }
    );

    let idx = 0;

    $(".slide > a > img").eq(1).css({"top" : "-100%"})
    $(".slide > a > img").eq(2).css({"top" : "-100%"})

    setInterval(() => {
        let next = (idx + 1) % 3;
        $(".slide > a > img").eq(next).css({"top" : "-100%"}).animate({"top" : "0%"});
        $(".slide > a > img").eq(idx).css({"top" : "0%"}).animate({"top" : "100%"});
        idx = next;
    }, 2000);

    }

    function openPop() {
        $(".popUp").show("fast");
    }

    function closePop() {
        $(".popUp").hide("fast");
    }