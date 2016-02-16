var pinkBox_y = 0;

var blueBox_y = 10

var gameLoop = function(){
	
	if (pinkBox_y <= 80) {
		pinkBox_y = pinkBox_y + 10;
	}
	if (blueBox_y <= 80) {
		blueBox_y = blueBox_y + 10;
	}

	ctx.fillStyle = "#9E969E";
	ctx.fillRect(0,0,100,100);
	ctx.fillStyle = "#EC7DF0";
	ctx.fillRect(0,pinkBox_y,10,10);

	ctx.fillStyle = "#4DC6EB";
	ctx.fillRect(30,blueBox_y,10,10);

}

var keypress = function(e) {
	console.log(e);

}

window.setInterval(gameLoop, 1000) 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


window.addEventListener("keydown", keypress);