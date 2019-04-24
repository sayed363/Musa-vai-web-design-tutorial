$(document).ready(function(){
	//owl-carousel
	$(".banner").owlCarousel({
		items:1,
		nav:true,
		navText:["<span class='fas fa-angle-double-left'></span>","<span class='fas fa-angle-double-right'></span>"],
		loop:true,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed:700,	
	});
	
	
	
});




// slick-carousel
$(document).ready(function(){
	$('.my_slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows:true,
		dots:true,
		prevArrow:"<span class='fas fa-angle-double-left'></span>",
		nextArrow:"<span class='fas fa-angle-double-right'></span>",
	  
	});
});