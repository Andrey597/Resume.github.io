$(document).ready(function() {
	$('.block2_info').click(function(){
        $('.block2_info').toggleClass('active');
	});
	$('.block2_line').click(function(){
        $('.block2_info').toggleClass('active');
	});
	$('.headfix_burger').click(function(){
        $('.headfix_burger').toggleClass('active');
        $('.headfix_nav').toggleClass('active');
	});
});


$(document).ready(function() {
 
	var nav = $('.nav-container');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 630) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});
 
});

$(document).ready(function() {
 
	var nav = $('.nav-container');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 250) {
			nav.addClass("f-nav760");
		} else {
			nav.removeClass("f-nav760");
		}
	});
 
});