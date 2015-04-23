jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});

  // calling the parallax plugin
  $('#bg-1').parallax('50%', 0.3);
  $('#bg-2').parallax('50%', 0.3);
  $('#bg-3').parallax('50%', 0.3);

  // if you want to keep seeing the animation on scroll
  // var config = { reset: true };
  // window.sr = new scrollReveal(config);

  window.sr = new scrollReveal();
});

