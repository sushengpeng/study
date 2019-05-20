;(function(root, factory, namespace) {
	if (typeof define === 'function') {
		// cmd
		if(define.cmd){
			define(function(require,exports,module) {	
				var $ = require("jquery");
				return factory($);
			});
		} // amd
		else {
			define(['jquery'], function($){
				return factory($);
			});
		}
	} 
	// 是否支持nodejs的模块（exports）是否存在，存在则使用nodejs模块模式。
	// 注意这里只是示意模块的写法，tab切换插件不合适用在nodejs上的模块。
	else if (typeof exports === 'object') { 
		module.exports = factory(require('jquery'));
	} 
	// 全局方式，为了避免命名冲突，建议使用命名空间
	else {
		namespace.Tabs = factory(root.jQuery);
	}
})(this, function($){	
	function Tabs (opts) {
		this.tabSelector = opts.tabSelector || '.tabs';
		this.event = opts.event || 'mouseenter';
		this.preventDefault = opts.preventDefault;
		this.timeout = opts.timeout || 0;
		this.callback = opts.callback || null;
		this.tabBoxTag = opts.tabBoxTag || 'div'
		this.tabBoxClassname = opts.tabBoxClassname || 'tab_box';
		this.tabBoxSelector = this.tabBoxTag + '.' + this.tabBoxClassname;
		this.tabBoxHideClassname = opts.tabBoxHideClassname || 'hide';
		this.menuBoxTag = opts.menuBoxTag || 'ul';
		this.menuBoxClassname = opts.menuBoxClassname || 'tab_menu';
		this.menuBoxSelector = this.menuBoxTag + '.' + this.menuBoxClassname;
		this.menuItemTag = opts.menuItemTag || 'li';
		this.menuCurClassname = opts.menuCurClassname || 'current';
		this.menuCurSelector = this.menuItemTag + '.' + this.menuCurClassname;

		this.init();
	}

	Tabs.prototype.init = function () {
		this.bind();
	}

	Tabs.prototype.bind = function () {
		var self = this,
			tabs = $(this.tabSelector),
			tabBox = tabs.children( this.tabBoxSelector ).children( this.tabBoxTag ),
			menu = tabs.children( this.menuBoxSelector ),
			items = menu.find( this.menuItemTag );
		items.bind(this.event, function(){
			self.delay($(this), self.timeout);
			if(self.callback){
				self.callback(this);
			}
		});
	}

	Tabs.prototype.delay = function (elem, time) {
		var self = this;
		time ? setTimeout(function(){ 
			self.tabHandle( elem ); 
		}, time) : self.tabHandle( elem );
	}

	Tabs.prototype.tabHandle = function (elem) {
		var self = this,
			tabs = $(this.tabSelector),
			tabBox = tabs.children( this.tabBoxSelector ).children( this.tabBoxTag );

		elem.siblings( this.menuItemTag )
			.removeClass( this.menuCurClassname )
			.end()
			.addClass( this.menuCurClassname );

		tabBox.siblings( this.tabBoxTag )
			.addClass( this.tabBoxHideClassname )
			.end()
			.eq( elem.index() )
			.removeClass( this.tabBoxHideClassname );
	}

	return Tabs;

}, window.Yunhe||(window.Yunhe={}));
