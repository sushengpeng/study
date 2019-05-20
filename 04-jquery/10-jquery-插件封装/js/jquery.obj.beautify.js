!(function($){
    var Beautify = function(dom,opt){
        //构造函数内部放私有属性
        var defaults = {
            color:"red",
            textDecoration:"none",
            fontSize:"20px"
        }
        this.element = dom;
        this.option = $.extend({},defaults,opt);
    }
    
    Beautify.prototype.beautify=function(){
        var _this = this;
        return _this.element.each(function(){
            $(this).css({
                color:_this.option.color,
                textDecoration:_this.option.textDecoration,
                fontSize:_this.option.fontSize
            })
        })
    }
    
    $.fn.beautiful = function(opt){
        // this   //jquery 选中的元素
        var bea = new Beautify(this,opt);
    
        return bea.beautify();
    }
})(jQuery);