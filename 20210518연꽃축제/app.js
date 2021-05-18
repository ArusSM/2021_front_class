window.onload = function(){
    $(".popUp").hide();
    let navContent = $("nav > ul > li > ul > li");
    navContent.hide();

    $("nav > ul > li").hover(
        function(e){
            $(e.currentTarget).find("ul > li").stop().slideDown(200);
        },
        function(e){
            $(e.currentTarget).find("ul > li").stop().slideUp(200);
        }

    )

    $("nav > ul > li > ul > li").hover(
        function(e){
            $(e.currentTarget).css({"backgroundColor" : "bisque"});
        },
        function(e){
            $(e.currentTarget).css({"backgroundColor" : "antiquewhite"});
        }

    )
    
    const img = $(".slide  img");
    img.eq(0).show();
    img.eq(1).hide();
    img.eq(2).hide();
    var idx = 0;

    setInterval(() => {
        const next = (idx + 1) % 3;
        img.eq(idx).fadeOut();
        img.eq(next).fadeIn();
        idx = next;
    }, 2000);

}

function closePop() {
    $(".popUp").hide("fast");
}

function openPop() {
    $(".popUp").show("fast")
}