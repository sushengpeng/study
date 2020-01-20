var Switchtable =function(active,arr1,arr2){
    // opt中包含切换后的样式,需要切换的dom元素以及对应的表格
    // {
    //     class:XXX,
    //     dom:{1:table1,2:table2,3:table4}
    // }
    var defaults={
        class:"active"
    }
    this.active=$.extend({},defaults);
    this.arr1=arr1;
    this.arr2=arr2;
}
Switchtable.prototype.swit=function(){
    var _this=this;
    var len=(_this.arr1).length;
    for(var i=0;i<len;i++){
        (_this.arr1)[i].click(function(){
            for(var i=0;i<len;i++){
                (_this.arr1)[i].removeClass(_this.active.class);
                (_this.arr2)[i].css("display","none");
                if($(this)[0]==(_this.arr1)[i][0]){
                    var j=i;
                }
            }
            $(this).addClass(_this.active.class);
            $(_this.arr2)[j].css("display","block");
        })
    }
}
$.fn.switcht=function(active,arr1,arr2){
    var sw= new Switchtable(active,arr1,arr2)
    return sw.swit();
}