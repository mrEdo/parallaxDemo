// My Scripts

// $(document).scroll(function(){
// 	console.log( $(document).scrollTop() );

// 	$("#frontclouds").css("left", String($(document).scrollTop() - 70) + "px" );
// 	$("#middleclouds").css("left", String($(document).scrollTop() * .5) + "px" );
// 	$("#backclouds").css("left", String($(document).scrollTop() * .2) + "px" );
// });

$(document).scroll(function(){
	//console.log( $(document).scrollTop() );

	$("#frontclouds").css("left", String($(document).scrollTop() - 70) + "px" );
	$("#middleclouds").css("left", String($(document).scrollTop() * .5) + "px" );
	$("#backclouds").css("left", String($(document).scrollTop() * .2) + "px" );
});

$(document).mousemove(function(p){
	//console.log(p.pageX + ", " + p.pageY);
	if(p.pageX > 200 && p.pageX < 800 ){
		$("#frontclouds").css("left", String(p.pageX - 800) + "px" );
		$("#middleclouds").css("left", String(p.pageX * .5 - 400) + "px" );
		$("#text").css("left", String(p.pageX * .35) + "px" );
		$("#backclouds").css("left", String(p.pageX * .2 - 200) + "px" );
	}
	
});








$(document).scroll(function(){
	$("#mountains").css("left", String($(document).scrollTop()*(-1) ) + "px" );
	$("#clouds").css("left", String($(document).scrollTop()*(-1)/3 ) + "px" );
	$("#character").css("left", String($(document).scrollTop()/2 ) + "px" );
	console.log( $(document).scrollTop() );
	
	$("#row1").css("right", String($(document).scrollTop() - 1000) + "px");
	$(".pics").css("transform","rotate(" + $(document).scrollTop() + "deg)");

	if( $(document).scrollTop() > 0 ){
		$("#row2").css("left", String($(document).scrollTop() - 1000) + "px");
	}
	
});

var animationCount = 0;
var guyMoving = false;
var moveGuyTimer;

function showNum(){
	animationCount++;
	if(animationCount > 4){
		animationCount = 0;
		clearInterval(moveGuyTimer);
		guyMoving = false;
	}
	if(animationCount == 1){

		document.getElementById("character").style.backgroundPosition = "0px 0px";
		//$("#charcter").css("background-color","red");
	} else if(animationCount == 2){
		//$("#charcter").css("background-position","206px 0px");
		document.getElementById("character").style.backgroundPosition = "206px 0px";
	} else if(animationCount == 3){
		//$("#charcter").css("background-position","412px 0px");
		document.getElementById("character").style.backgroundPosition = "412px 0px";
	} else if(animationCount == 4){
		document.getElementById("character").style.backgroundPosition = "618px 0px";
		//$("#charcter").css("background-position","618px 0px");
	}
	//console.log(animationCount);
}

$(document).scroll(function(){
	if(guyMoving == false){
		moveGuyTimer = setInterval(showNum, 250);
		guyMoving = true;
	}
	
});


















