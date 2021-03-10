function setCss( obj , dom){
    obj = {
        backgroundColor : 'asdf',
        asdf : "qqq",
        hello : "ㅎㅇ"
    };

    // obj.entrines()
    let arr = [
        ["backgroundColor" , "asdf"],
        ["color" , "#ddd"]
    ];
    
    arr.forEach( list => {
        dom.style.backgroundColor = "#ddd";
        // dom.style[ list[0] ] => dom.style.backgroundColor
        dom.style[ list[0] ] = list[1];
        do.style.backgroundColor = "asdf";
    });
}