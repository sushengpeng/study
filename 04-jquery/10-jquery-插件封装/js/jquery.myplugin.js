$.fn.myPlugin = function(opt){
    // console.log(this);   //jQuery选中的元素
    //内部设置默认参数，但是如果页面中大部分情况用一个默认值的话，用户定制不了，改变不了默认值，需要把_default默认配置给暴露出去
    // var _default = {color:"red"};
    var option =$.extend({},$.fn.myPlugin.default,opt);  //一定需要合并到一个新的对象上，否则会影响默认选项

    this.css("color",option.color);
    // this.append(this.attr("href"))
    return this.each(function(index,dom){    //return 是链式调用的关键
        // console.log(this);   //遍历的每一个dom
        dom.innerHTML+=dom.href;
    })
    // console.log(result)
}
//可以让用户配置默认选项
$.fn.myPlugin.default = {
    color:"red"
}