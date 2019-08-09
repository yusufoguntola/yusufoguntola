
//responsive menu
$(document).ready(function(){
	$('#menu').slicknav({
		prependTo: '.toggle',
	});
});

//add background to header when scroll
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("header").addClass("header-bg");
        } else {
           $("header").removeClass("header-bg");
        }
    });
});