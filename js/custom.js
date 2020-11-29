 /* ==== Menubar Active Start ===== */
  $('#main-menu').on('click', 'li',function(){
    $('#main-menu li.active').removeClass('active');
    $(this).addClass('active');
  });
  
  /* ==== Menubar Start ===== */
  $('#mobile-icon').click(function(){
    $('#main-menu ul').slideToggle(1000);
  });
  $(window).resize(function(){
    if($(window).width() > 576){
      $('#main-menu ul').show();
    }else{
      $('#main-menu ul').hide();
    }
  });
  
  /* ==== top to button ===== */

$(document).ready(function(){

/*--- upper button---*/

$(window).scroll(function(){


var x = $(window).scrollTop();

if (x>1000) {
  $('#upper').fadeIn(1000);

}else{
 
   $('#upper').fadeOut(1000);

}

})

$('#upper').click(function(){

$('html').animate({scrollTop: 0},2000);

});


});

			/* ==== smooth scrolling ===== */

$(document).ready(function(){
	  // Add smooth scrolling to all links
	  $("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
	  });
	});
		
	/* ==== counterUp ===== */
	
	$('.counter').counterUp({
			delay: 10,
			time: 1000
			});
			
		/* ==== owlCarousel ===== */
	$('#logocarousel').owlCarousel({
   		items:5,
		loop:true,
		margin:4,
		autoplay:true,
		autoplayTimeout:1500,
		responsiveClass:true,
		responsive:{
			0:{
			items:2,
			},
			576:{
			items:3,
			},
			768:{
			items:4,
			},
			1000:{
			items:5,
			},
			1300:{
			items:6,
			dots:true,
			}
		}
	})