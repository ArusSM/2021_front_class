window.onload = function(){
    $(".gallery").hide();
    $("nav > ul > li > ul").hide();
    $("nav > ul > li").hover(
        function(e) {
            $(e.currentTarget).find("ul").stop().slideDown();
            $(e.currentTarget).find("div").css({"backgroundColor" : "burlywood"});
        },
        function(e) {
            $(e.currentTarget).find("ul").stop().slideUp();
            $(e.currentTarget).find("div").css({"backgroundColor" : "cornsilk"});
        }
    ); 

    let idx = 0;
    
    let imgloc = $(".slide > img");
    imgloc.hide();
    imgloc.eq(0).show();
    const frame = setInterval(() => {
        const next = (idx + 1) % 3;
        $(imgloc).eq(idx).fadeOut();
        $(imgloc).eq(next).fadeIn();
        idx = next;
    }, 1000);

    $(".gati").click(
        function() {
        $(".notice").hide();
        $(".gallery").show();
        $(".gati").css({"backgroundColor" : "white"});
        $(".gati").css({"borderBottom" : "none"});
        $(".noti").css({"borderBottom" : "1px solid black"})
        $(".noti").css({"backgroundColor" : "lightgray"});
    }
    );
    $(".noti").click(
        function() {
        $(".gallery").hide();
        $(".notice").show();
        $(".noti").css({"backgroundColor" : "white"});
        $(".noti").css({"borderBottom" : "none"});
        $(".gati").css({"borderBottom" : "1px solid black"})
        $(".gati").css({"backgroundColor" : "lightgray"});
    }
    );
    $(".popUp").hide();
}

function openPop() {
    $(".popUp").show("fast");
}

function closePop() {
    $(".popUp").hide("slow");
}