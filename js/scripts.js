$(document).ready(function(){
	//set options
	var speed = 500;  //fade speed
	var autoswitch = true;  //auto slider option
	var autoswitch_speed = 3000;  //auto slider speed

	// add active to first slide (was originally part of the first slides class, added it through jq for asthetics)
	$('.slide').first().addClass('active');

	// hide all slides
	$('.slide').hide();

	// show first slide
	$('.active').show();

	// show next slide on arrow click
	$('#next').on('click',lastSlide);/*function(){
		$('.active').removeClass('active').addClass('lastActive'); // oldActive labels the previous class to have 'active', for referencing
		if ($('.lastActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else {
			$('.lastActive').next().addClass('active');
		};
		$('.lastActive').removeClass('lastActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	});*/

	// show prev slide on arrow click
	// Same functionality, just replace 'first' with 'last', 'next' with 'prev' and vice versa
	$('#prev').on('click', nextSlide);/*function(){
		$('.active').removeClass('active').addClass('lastActive'); // oldActive labels the previous class to have 'active', for referencing
		if ($('.lastActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		} else {
			$('.lastActive').prev().addClass('active');
		};
		$('.lastActive').removeClass('lastActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	});*/  //moved all functionality to a function


// Auto slider handler
	if(autoswitch == true) {
		setInterval(function(){
		$('.active').removeClass('active').addClass('lastActive'); // oldActive labels the previous class to have 'active', for referencing
		if ($('.lastActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else {
			$('.lastActive').next().addClass('active');
		};
		$('.lastActive').removeClass('lastActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
		}, autoswitch_speed);
	};

	// switch slide function, next
	function nextSlide() {
		$('.active').removeClass('active').addClass('lastActive'); 
		if ($('.lastActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else {
			$('.lastActive').next().addClass('active');
		};
		$('.lastActive').removeClass('lastActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	};

	// switch slide function, prev
	function lastSlide() {
		$('.active').removeClass('active').addClass('lastActive'); 
		if ($('.lastActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else {
			$('.lastActive').next().addClass('active');
		};
		$('.lastActive').removeClass('lastActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	};
});











