/**
 *ui.js
 * 
 * defines functionality for instrumenting the user-interface. 
 * 
 */

var librs = librs || {};

librs.ui = {};

librs.ui = function() {

var counter = 1;

var toggle = function() {
	
	//console.log('About!');
	
	//Grab the html element with the ID “about”
    var el = document.getElementById('about');

    // Add the class “show” to the element.
    librs.utility.addClass(el, 'show');

	if (counter == 1) {
		librs.utility.removeClass(el, 'show');
		counter = counter - 1;
	}
	else {
		librs.utility.addClass(el,'show');
		counter = counter + 1;
	}
    // Remove the class "show"
    //removeClass(el, 'show');
};

var initialize = function() {
	
	console.log('Initialize!');
	
	//Grab the 'About' button element, identified by the
	// 'about-btn' id.
	var button = document.getElementById('about-btn');
	
	//From this point forward, when the button is clicked, the
	//toggle function shall be invoked.
	button.onclick = toggle;
	
};

//When this file is included at the bottom of the page,                                                                           
// the js is loaded after the DOM is loaded.  It is a                                                                              
// good time to initialize the UI elements in the page.                                                                            
initialize();

}; // end module

//Invoke module.  After invocation, the module's code is now added to
//the namespace and is accessible through the librs object.

librs.ui();
