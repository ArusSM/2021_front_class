window.onload = function(){
    const navibody = $("nav > ul > li");
    const navi = $("nav > ul > li > ul > li");
    navi.hide();
    $(".popUp").hide();
    $(".slide > div").hide()
    navibody.hover(
        function(e) {
            $(navi).stop().slideDown(200);
            $(".slide > div").stop().slideDown(200);
            $(e.currentTarget).find("div").css({"backgroundColor" : "burlywood"});
        },
        function(e) {
            $(navi).stop().slideUp(200);
            $(".slide > div").stop().slideUp(200);
            $(e.currentTarget).find("div").css({"backgroundColor" : "antiquewhite"});
        }
    );

    $("nav > ul > li > ul > li").hover(
        function(e){
            $(e.currentTarget).css({"backgroundColor" : "burlywood"});
        },
        function(e){
            $(e.currentTarget).css({"backgroundColor" : "bisque"});
        }       

    );


    const img = $(".slide > img");
    img.css({"left" : "100%"})
    img.eq(0).css({"left" : "0"})

    let idx = 0;

    const frame = setInterval(() => {
        const next = (idx+1) % 3;
        img.eq(next).css({"left" : "100%"}).animate({"left" : 0});
        img.eq(idx).animate({"left" : "-100%"});
        idx = next;
    }, 2000);

}

function openPop() {
    $(".popUp").show("fast");
}

function closePop() {
    $(".popUp").hide("fast");
}