!(function($){

    
    $.fn.extend({
        tab:function(option){
            var settings = $.extend({},$.fn.tab.defaults,option);
            console.log(this);
            var _this=this;
            this.on(settings.eventType,settings.tabs,function(){
                $(this).addClass(settings.tabClass).siblings().removeClass(settings.tabClass);
                var index = $(this).index();

                var effect = {
                    fade:{
                        opacity:"show" 
                    },
                    slide:{
                        height:"show"
                    }
                }
                if(settings.effect=="default"){
                    _this.find(settings.conts).eq(index).show().siblings().hide();
                }else{
                    _this.find(settings.conts).eq(index).animate(effect[settings.effect]).siblings().hide();
                }
                
            })
        }
    })

    //默认值
    $.fn.tab.defaults = {
        tabs:"li",              //tab切换的小标签
        tabClass:"active",      //当前激活的小标签的类名
        conts:"div",            //标签对应的内容
        contClass:"active",     //对应的内容的类名
        eventType:"click",      //触发标签切换的事件类型
        effect:"default"        //当有effect配置项，并别不为default的时候，contClass不生效
    };
    // $.fn.tab=function(){

    // }
})(jQuery);