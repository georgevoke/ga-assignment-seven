$(document).ready(function() {


	/****************************************************
	/* Toggle nav when menu icon is clicked
	/****************************************************/


	// on menu button click
	$('#burger').on('click', function(event) {
		
		// prevent default submit behaviour
		event.preventDefault();

		// toggle nav
		$('#nav').slideToggle('hide');

	});


	/****************************************************
	/* Ensure nav is only hidden at 767px >
	/****************************************************/


	// set var for max-width 767px
	var widthDisable = window.matchMedia("(max-width: 767px)")

	// create function
	function hideNav(widthDisable) {

		// If media query matches
    	if (widthDisable.matches) {
    		$('#nav').hide();
   		} 
	}

	// Call listener function at run time
	hideNav(widthDisable)
	// Attach listener function on state changes
	widthDisable.addListener(hideNav)



	// set var for min-width 768px
	var widthEnable = window.matchMedia("(min-width: 768px)")

	// create function
	function showNav(widthEnable) {

		// If media query matches
    	if (widthEnable.matches) {
    		$('#nav').show();
   		} 
	}

	// Call listener function at run time
	showNav(widthEnable)
	// Attach listener function on state changes
	widthEnable.addListener(showNav)
		
});