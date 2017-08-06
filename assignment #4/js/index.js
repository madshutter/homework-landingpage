

$(document).ready(function(){
 $("p#first-read-more-text").hide();
 $("#first-read-less-button").hide();
 $("#first-read-more-button").click(slideDownFirstReadMoreText);
	
	function preventDefault(){
	}

	function slideDownFirstReadMoreText(){
	$("p#first-read-more-text").slideDown();		
 	$("#first-read-less-button").show();
 	$("#first-read-more-button").hide();	
		 }

 $("#first-read-less-button").click(slideUpFirstReadMoreText);
	
	function slideUpFirstReadMoreText(){
	$("p#first-read-more-text").slideUp();		
 	$("#first-read-more-button").show();	
 	$("#first-read-less-button").hide();
		 }		 

})

$(document).ready(function(){
 $("p#second-read-more-text").hide();
 $("#second-read-less-button").hide();
 $("#second-read-more-button").click(slideDownSecondReadMoreText);
	
	function preventDefault(){
	}

	function slideDownSecondReadMoreText(){
	$("p#second-read-more-text").slideDown();		
 	$("#second-read-less-button").show();
 	$("#second-read-more-button").hide();	
		 }

 $("#second-read-less-button").click(slideUpSecondReadMoreText);
	
	function slideUpSecondReadMoreText(){
	$("p#second-read-more-text").slideUp();		
 	$("#second-read-more-button").show();	
 	$("#second-read-less-button").hide();
		 }		 

})

// Attempt at $(this) keyword 

$("article#primary").mouseenter(function (data) {
            $(this).css("background-color","orange");
        });

$("article#primary").mouseleave(function (data) {
            $(this).css("background-color", "white");
        });
$("article#secondary").mouseenter(function (data) {
            $(this).css("background-color","orange");
        });

$("article#secondary").mouseleave(function (data) {
            $(this).css("background-color", "white");
        });
