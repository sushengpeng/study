define("tab",["jquery"], function($) {
    function tab(list,content){
        list.find("li").click(function(){
            $(this).addClass("active").siblings().removeClass("active")
            content.find("li").eq($(this).index()).show().siblings().hide()
        })
    }
    return tab;
});