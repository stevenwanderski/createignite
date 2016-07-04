(function($){
	
	$(function(){
		// return only numbers regex
		var number_pattern = /\d+/g;
		
		// cycle through each project section and load the first thumb
		$('.project-wrap').each(function(index) {
			// get the first thumb nid
			if($(this).find('.views-field-field-thumb').length > 0){
			  var first_nid = $(this).find('.views-field-field-thumb a:first').attr('href').match(number_pattern);
				// load the
				$(this).find('.right').load('/project/image/' + first_nid);
			}
		});
	
		// click a project thumb
		$('.views-field-field-thumb a').live('click', function() {
			// get the nid
			var nid = $(this).attr('href').match(number_pattern);
			// load the image
			$(this).parents('.project-wrap').find('.right').load('/project/image/' + nid);
			return false;
		});
		
		var slide_speed = 2000;
		var easing = 'easeInOutCubic';
		var current_page = 'home';
		
		// home
		$('#nav .home a, #logo a').click(function() {
			current_page = 'home';
			contact_button_check();
			$('.page-inner').animate({left: 0}, slide_speed, easing);
			$('#nav a').removeClass('active');
			$('#nav .home a').addClass('active');
			return false;
		});
		
		// about
		$('#nav .about, .btn-about').click(function() {
			current_page = 'about';
			$('.page-inner').animate({left: -1877}, slide_speed, easing, contact_button_check);
			$('#nav a').removeClass('active');
			$('#nav .about a').addClass('active');
			return false;
		});
		
		// branding
		$('#nav .branding, .views-row-1').click(function() {
			current_page = 'branding';
			$('.page-inner').animate({left: -3751}, slide_speed, easing, contact_button_check);
			$('#nav a').removeClass('active');
			$('#nav .branding a').addClass('active');
			return false;
		});
		
		// print
		$('#nav .print, .views-row-2').click(function() {
			current_page = 'print';
			$('.page-inner').animate({left: -5628}, slide_speed, easing, contact_button_check);
			$('#nav a').removeClass('active');
			$('#nav .print a').addClass('active');
			return false;
		});
		
		// packaging
		$('#nav .packaging, .views-row-3').click(function() {
			current_page = 'packaging';
			$('.page-inner').animate({left: -7503}, slide_speed, easing, contact_button_check);
			$('#nav a').removeClass('active');
			$('#nav .packaging a').addClass('active');
			return false;
		});
		
		// web
		$('#nav .web, .views-row-4').click(function() {
			current_page = 'web';
			$('.page-inner').animate({left: -9379}, slide_speed, easing, contact_button_check);
			$('#nav a').removeClass('active');
			$('#nav .web a').addClass('active');
			return false;
		});
		
		// product
		$('#nav .product, .views-row-5').click(function() {
			current_page = 'product';
			$('.page-inner').animate({left: -11257}, slide_speed, easing, contact_button_check);
			$('#nav a').removeClass('active');
			$('#nav .product a').addClass('active');
			return false;
		});
		
		// contact
		$('#nav .contact, .btn-contact').click(function() {
			current_page = 'contact';
			contact_button_check();
			$('.page-inner').animate({left: -13133}, slide_speed, easing);
			$('#nav a').removeClass('active');
			$('#nav .contact a').addClass('active');
			return false;
		});
		
		// display / hide the contact button
		function contact_button_check(){
			if(current_page == 'about' || current_page == 'branding' || current_page == 'print' || current_page == 'packaging' || current_page == 'web' || current_page == 'product'){
				if($.browser.msie){
					$('.btn-contact').show();
				}else{
					$('.btn-contact').fadeIn(200);	
				}
			}else{
				if($.browser.msie){
					$('.btn-contact').hide();
				}else{
					$('.btn-contact').fadeOut(200);	
				}
			}
		}
				
	
	});
	
}(jQuery));

