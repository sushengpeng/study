;(function($){
	$.fn.extend({
		Tabs:function(options){
			// 处理参数
			options = $.extend({
				event : 'mouseover',
				timeout : 0,
				auto : 0,
				callback : null,
				tabBoxSelector : 'div.tab_box',
				tabBoxTag : 'div',
				tabBoxHideClassname : 'hide',
				menuSelector : 'ul.tab_menu',
				menuItemTag : 'li',
				menuCurClassname : 'current',
			}, options);
			
			var self = $(this),
				tabBox = self.children( options.tabBoxSelector ).children( options.tabBoxTag ),
				menu = self.children( options.menuSelector ),
				items = menu.find( options.menuItemTag ),
				timer;
				
			var tabHandle = function( elem ){
					elem.siblings( options.menuItemTag )
						.removeClass( options.menuCurClassname )
						.end()
						.addClass( options.menuCurClassname );
						
					tabBox.siblings( options.tabBoxTag )
						.addClass( options.tabBoxHideClassname )
						.end()
						.eq( elem.index() )
						.removeClass( options.tabBoxHideClassname );
				},
					
				delay = function( elem, time ){
					time ? setTimeout(function(){ tabHandle( elem ); }, time) : tabHandle( elem );
				},
				
				start = function(){
					if( !options.auto ) return;
					timer = setInterval( autoRun, options.auto );
				},
				
				autoRun = function(){
					var current = menu.find( options.menuItemTag + '.' + options.menuCurClassname ),
						firstItem = items.eq(0),
						len = items.length,
						index = current.index() + 1,
						item = index === len ? firstItem : current.next( options.menuItemTag ),
						i = index === len ? 0 : index;
					
					current.removeClass( options.menuCurClassname );
					item.addClass( options.menuCurClassname );
					
					tabBox.siblings( options.tabBoxTag )
						.addClass( options.tabBoxHideClassname )
						.end()
						.eq(i)
						.removeClass( options.tabBoxHideClassname );
				};
							
			items.bind( options.event, function(){
				delay( $(this), options.timeout );
				if( options.callback ){
					options.callback( self );
				}
			});
			
			if( options.auto ){
				start();
				self.hover(function(){
					clearInterval( timer );
					timer = undefined;
				},function(){
					start();
				});
			}
			
			return this;
		}
	});
})(window.jQuery);
