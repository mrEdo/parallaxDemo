// My Scripts

// $(document).scroll(function(){
// 	console.log( $(document).scrollTop() );

// 	$("#frontclouds").css("left", String($(document).scrollTop() - 70) + "px" );
// 	$("#middleclouds").css("left", String($(document).scrollTop() * .5) + "px" );
// 	$("#backclouds").css("left", String($(document).scrollTop() * .2) + "px" );
// });

$(document).scroll(function(){
	console.log( $(document).scrollTop() );

	$("#frontclouds").css("left", String($(document).scrollTop() - 70) + "px" );
	$("#middleclouds").css("left", String($(document).scrollTop() * .5) + "px" );
	$("#backclouds").css("left", String($(document).scrollTop() * .2) + "px" );
});

$(document).mousemove(function(p){
	console.log(p.pageX + ", " + p.pageY);
	if(p.pageX > 200 && p.pageX < 800 ){
		$("#frontclouds").css("left", String(p.pageX - 800) + "px" );
		$("#middleclouds").css("left", String(p.pageX * .5 - 400) + "px" );
		$("#text").css("left", String(p.pageX * .35) + "px" );
		$("#backclouds").css("left", String(p.pageX * .2 - 200) + "px" );
	}
	
});