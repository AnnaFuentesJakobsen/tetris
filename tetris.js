var y = 0;

var gameLoop = function(){
	if (y <= 80) {
		y = y + 10;
	}

	ctx.fillStyle = "#9E969E";
	ctx.fillRect(0,0,100,100);
	ctx.fillStyle = "#EC7DF0";
	ctx.fillRect(0,y,10,10);
}



window.setInterval(gameLoop, 1000) 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
