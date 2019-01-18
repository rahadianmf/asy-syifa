$('.main-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
	autoplay: true,
	dots: true,
	prevArrow: false,
	nextArrow: false,
  autoplaySpeed: 2000,
});

$('.slider-news-blog').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
	autoplay: false,
	dots: false,
  autoplaySpeed: 2000,
});

$('.grid').masonry({
  itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	gutter: '.gutter-sizer',
  percentPosition: true
});
