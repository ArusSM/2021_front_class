window.onload = function(){
    $(".pop").hide();

    $("nav > ul > li > ul > li").hide();
    $("nav > ul").hover(
        function(e){
            $("nav > ul > li > ul > li").stop().slideDown(200);
        },
        function(e){
            $("nav > ul > li > ul > li").stop().slideUp(200);
        }
    );
    $("nav > ul > li").hover(
        function(e){
            $(e.currentTarget).find("div").css({"backgroundColor" : "#333333"});
        },
        function(e){
            $(e.currentTarget).find("div").css({"backgroundColor" : "gray"});
        }
    );

    $("nav > ul > li > ul > li").hover(
        function(e){
            $(e.currentTarget).css({"backgroundColor" : "#333333"});
        },
        function(e){
            $(e.currentTarget).css({"backgroundColor" : "gray"});
        }
    );

    $(".slider > img").css({ "left": "100%" });
    $(".slider > img").eq(0).css({ "left": 0 });
    const scenes = $(".slider_scene");
    let idx = 0;

    const frame = setInterval(function () {
        const next = (idx + 1) % 3;
        scenes.eq(next).css({ "left": "100%" }).animate({ "left" : 0 });
        scenes.eq(idx).animate({ "left": "-100%" });
        idx = next;
    }, 2000);



};

function openPop() {
    $(".pop").show();
}
function closePop() {
    $(".pop").hide();
}