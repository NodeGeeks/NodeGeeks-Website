(function($) {
	'use strict';	
	/*
	Dropdown
	=========================== */
	$('.ul.navbar-nav li.dropdown').on("mouseenter", function() {
		$(this).addClass('active');$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
	});
	$('.ul.navbar-nav li.dropdown').on("mouseleave", function() {
		$(this).removeClass('active');$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
	});
	/*
	Header
	=========================== */
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop != 0){
			$(".navbar-default").addClass("top-nav-collapse");
		} else {
			$(".navbar-default").removeClass("top-nav-collapse");
		}
	});
	
	/*
	Accordions
	=========================== */
	$('.accordions .panel-heading a[data-toggle="collapse"]').on('click', function () {   
		jQuery('.accordions .panel-heading a[data-toggle="collapse"]').removeClass('active');
		$(this).addClass('active');
	 });
	
	/*
	Hover Diamond Item
	=========================== */
	$('.diamondswrap').each(function(){				
		$(this).find('.item').on({
			mouseenter : function() {
				$(this).find('.content').fadeIn('fast');
				$(this).find('.content').removeClass('animated bounceOut');
				$(this).find('.content').addClass('animated bounceIn');	
			},
			mouseleave : function() {
				$(this).find('.content').removeClass('animated bounceIn');
				$(this).find('.content').addClass('animated bounceOut');
				$(this).find('.content').fadeOut('fast');
			}
		});
	});	
	
	/*
	Half column setting
	=========================== */
	function setFluidLeft(){
		var getGap = $('.half-full').offset().left;
		$('.set-left').each(function(){
			var getWidth = $(this).width();
			var setWidth = getWidth + getGap;
			$(this).find('.fluid').css({
				'width' : setWidth + 'px',
				'left' : '-' + getGap + 'px',
				'padding-left' : getGap + 'px' 
			});
		});
		
		$('.set-right').each(function(){
			var getWidth = $(this).width();
			var setWidth = getWidth + getGap;
			$(this).find('.fluid').css({
				'width' : setWidth + 'px',
				'right' : '-' + getGap + 'px',
				'padding-right' : getGap + 'px' 
			});
		});
	}

	$(window).load(function(){
		setFluidLeft();
		$(this).resize(setFluidLeft);
	});
})(jQuery);

