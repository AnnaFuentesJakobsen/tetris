var y = 0;

var gameLoop = function(){
	y = y + 10;

	ctx.fillStyle = "#9E969E";
	ctx.fillRect(0,0,100,100);
	ctx.fillStyle = "#EC7DF0";
	ctx.fillRect(0,y,10,10);

	if(y > 50){
		console.log("Kurt");
	}
}



window.setInterval(gameLoop, 1000) 

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
