;(function(){
    function resize(){
        var html = document.documentElement;
        var w = html.getBoundingClientRect().width;
        // 如果html宽度大于750，按照750的原稿尺寸显示
        w = w>750?750:w;
        var fontSize = w/7.5;   //7.5指的是设计稿的尺寸为750，如果设计稿的尺寸为828，那么应该是w/8.28
        html.style.fontSize = fontSize+"px";
    }
    resize();
    window.onresize=function(){
        //在苹果手机上会有闪屏效果
        setTimeout(function(){
            resize();
        },300)
    };


})();