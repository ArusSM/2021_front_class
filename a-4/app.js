window.onload = function(){
    $("nav > ul > li > ul > li").hide();
    $(".gallery").hide();
    $(".popUp").hide();

    $("nav > ul > li").hover(
        function(e){
           $(e.currentTarget).find("li").stop().slideDown(200);
           $(e.currentTarget).find("div").css({"backgroundColor" : "burlywood"});
        },
        function(e){
            $(e.currentTarget).find("li").stop().slideUp(200);
            $(e.currentTarget).find("div").css({"backgroundColor" : "bisque"});
        }
    )

    $("nav > ul > li > ul > li").hover(
        function(e){
            $(e.currentTarget).css({"backgroundColor" : "burlywood"});
         },
         function(e){
             $(e.currentTarget).css({"backgroundColor" : "bisque"});
         }
    )

    $(".n_t").click(
        function(e){
            $(".n_t").css({"backgroundColor" : "white"});
            $(".g_t").css({"backgroundColor" : "lightgray"});
            $(".g_t").css({"border-bottom" : "1px solid black"});
            $(".n_t").css({"border-bottom" : "none"});
            $(".notice").show();
            $(".gallery").hide();
        }
    )
    $(".g_t").click(
        function(e){
            $(".g_t").css({"backgroundColor" : "white"});
            $(".n_t").css({"backgroundColor" : "lightgray"});
            $(".n_t").css({"border-bottom" : "1px solid black"});
            $(".g_t").css({"border-bottom" : "none"});
            $(".notice").hide();
            $(".gallery").show();
        }
    )


    $(".slide > img").hide();
    $(".slide > img").eq(0).show();
    const img = $(".slide > img");
    let idx = 0;
    const frame = setInterval(() => {
        const next = (1+idx) % 3;
        img.eq(idx).fadeOut();
        img.eq(next).fadeIn();
        idx = next;
    }, 2000);


}

function openPop() {
    $(".popUp").show("fast");
}

function closePop() {
    $(".popUp").hide("fast");
}