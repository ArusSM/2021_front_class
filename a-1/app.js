window.onload = function() {

    $("nav > ul > ul").hide();
    $("nav > ul").mouseenter(function(e){

        const p = $(e.currentTarget).find("p");
        p.addClass("active");
        $("nav > ul > ul").stop().slideDown(200);

    });

    $("nav > ul").mouseleave(function(e){

        const p = $(e.currentTarget).find("p");
        p.removeClass("active");

    });
    $("nav").mouseleave(function(e){

        $("nav > ul > ul").stop().slideUp(200);

    });


    $("nav > ul > ul > li").hover(
        function(e){
            $(e.currentTarget).css({ backgroundColor : "aliceblue" });
        },
        function(e){
            $(e.currentTarget).css({ backgroundColor : "transparent" });
        }
    );

    $(".slider > img").css({ "top": "100%" });
    $(".slider > img").eq(0).css({ "top": 0 });
    let idx = 0;
    setInterval(function () {
        let next = (idx + 1) % 3;
        $(".slider > img").eq(next).css({ "top": "100%" }).stop().animate({ "top": 0 }, 800);
        $(".slider > img").eq(idx).stop().animate({ "top": "-100%" }, 800);
        idx = next;
    }, 3000);

    $(".gallery").hide();
    $(".news").show();
    $(".tab-news").on("click", function() {
        $(".tab-gallery").css({"backgroundColor" : "gray"});
        $(".tab-news").css({"backgroundColor" : "#FFF"});
        $(".gallery").hide();
        $(".news").show();
    });
    $(".tab-gallery").on("click", function() {
        $(".tab-gallery").css({"backgroundColor" : "#FFF"});
        $(".tab-news").css({"backgroundColor" : "gray"});
        $(".gallery").show();
        $(".news").hide();
    });
    $(".pop").hide();



}
function openPop(){
    $(".pop").show("slow");
}

function closePop(){
    $(".pop").hide("fast");
}