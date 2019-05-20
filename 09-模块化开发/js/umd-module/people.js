
// 通过这种写法可以让自定义插件支持commonjs、amd和传统全局方式来使用
(function (factory, namespace) {
	// UMD先判断是否支持Node.js的模块（exports）是否存在，存在则使用Node.js模块模式。
    if (typeof exports === 'object') {
    
        module.exports = factory();

    // 再判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。    
    } else if (typeof define === 'function' && define.amd) {

        define(factory);
        
    } else {
        
        // 全局方式，为了避免命名冲突，建议使用命名空间
        // 将插件挂载到命名空间
        namespace.People = factory();
    }
})(function () {
    function People (opts) {
        this.name = opts.name;
    }
    People.prototype.showName = function () {
        console.log(this.name);
    }
    return People;
}, window.Yunhe||(window.Yunhe={}));
