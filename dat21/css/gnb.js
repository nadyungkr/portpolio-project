
		$(function(){
			var $firstMenu = $('nav > ul > li'),
				$header = $('header');
			
			$firstMenu.mouseenter(function(){
				$header.stop().animate({height:'300'px},300);
			
			})
			.mouseleave(function(){
				$header.stop().animate({height:'120'px},300);
			
			});
		
		});