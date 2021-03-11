window.onload = function(){
    $(".pop").hide();
    $(".backColor").hide();
    $("nav > ul > li > ul > li").hide();
    $("nav > ul > li").hover(
        function(e){
            // $("nav > ul > li > ul > li").stop().slideDown(200); // 다 보이게 하기
            $(e.currentTarget).find("li").stop().slideDown(200); // 한줄씩 보이게 하기
            // $(".backColor").stop().slideDown(200); // 뒷배경
        },
        function(e){
            // $("nav > ul > li > ul > li").stop().slideUp(200); // 다 보이게 하기
            $(e.currentTarget).find("li").stop().slideUp(200); // 한줄씩 보이게 하기
            // $(".backColor").stop().slideUp(200); // 뒷배경
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
    $(".pop").show("slow");
}
function closePop() {
    $(".pop").hide("slow");
}