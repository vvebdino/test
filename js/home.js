$(document).ready(function() {
	
	//слайдер для rs-slider

if ($('.rs-slider-container').length > 0) {
	$('.rs-slider-container').slick({
		infinite: true,
		slidesToShow: 1,
		speed: 800,
		dots: true,
		autoplay: true,
		lazyLoad: 'ondemand',
		cssEase: 'cubic-bezier(0.845, 0.045, 0.355, 1)'
	});
}	

})