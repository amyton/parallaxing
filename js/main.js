jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});

  $('#bg-1').parallax('50%', 0.2);
  $('#bg-2').parallax('50%', 0.2);
  $('#bg-3').parallax('50%', 0.2);
});

