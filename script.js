$(document).ready(function () {
	// banner slider
	$('.banner-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 1000,
	});
	// venobox for video
	$('.venobox_video').venobox({
		framewidth: '400px',
		frameheight: '300px',
		border: '5px',
		bgcolor: '#5dff5e',
	});
	// venobox for team img
	$('.venobox').venobox({
		framewidth: '440px',
		frameheight: '460px',
		border: '5px',
		bgcolor: '#ffffff',
		titleattr: 'data-title',
	});
	//team-slider
	$('.team-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500,
		arrows: false,
	});
	// team2-slider
	$('.slider-team2-text').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-team2-img',
	});
	$('.slider-team2-img').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-team2-text',
		prevArrow: '.arrow-left',
		nextArrow: '.arrow-right',
		dots: false,
		centerMode: true,
		centerPadding: '0px',
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 1500,
	});
});
