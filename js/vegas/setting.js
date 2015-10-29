(function($) {
	'use strict';
	$.vegas('slideshow', {
		delay:8000,
		backgrounds:[
		{ src:'img/20151023_140707-1.jpg', fade:4000 },
		{ src:'img/20151023_143145.jpg', fade:4000 }
		]
	})('overlay', {
		src:'img/bg-overlay.png'
	});
})(jQuery);
