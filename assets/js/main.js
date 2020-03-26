
(function ($) {
	"use strict";
   $(document).ready(function($){

			 // Sticky Menu
			$('.js--sticky-section').waypoint(function(direction){
			   if(direction == 'down'){
			         $('.header-area').addClass('sticky');
			      } else {
			         $('.header-area').removeClass('sticky');
			   }
			});
            // Sticky Menu
            
           

			// Menu Active Color
			$('.main-menu li').on('click', function(){
			   $('.main-menu li').removeClass('active');
			   $(this).addClass('active');
			});
			// End Menu


    // Start Slick Nav
   $('#mobile-menu').slicknav({
        prependTo: '.show-mobile-menu',
        allowParentLinks: true
    });
    // End Slick Nav

//  Scroll Up
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
//   Scroll Up

 // Smooth Scroll for IE/ EDGE/ SAFARI
 $('a').on('click', function(event){
    if (this.hash !==''){
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
        });
    }
});
// End Smooth Scroll for IE/ EDGE/ SAFARI
   });

})(jQuery);
