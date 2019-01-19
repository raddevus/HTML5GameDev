// main_300.js

// function definition
var ctx = null;
var theCanvas = null;
window.addEventListener("load", initApp);

function initApp()
{
	theCanvas = document.getElementById("gamescreen");
	ctx = theCanvas.getContext("2d");
	
	window.addEventListener("mousemove", mouseMoveHandler);
	window.addEventListener("resize", draw);
	theCanvas.addEventListener("click",clickHandler);

	draw();
}

function clickHandler(e)
{
	ctx.fillStyle = "#00ff00";
	ctx.fillRect(e.clientX-5,e.clientY-5,10, 10);
	// add code to play sound here
	var audio = getAudioElement("bell0");
	audio.play();
	
}

function getAudioElement(idPrefix)
{
	// This method also uses the audioCounter to loop through the 
	// audio tags so overlapping sounds can play -- makes it seem faster.
	var audioOut;
	audioOut = document.getElementById(idPrefix);// + audioCounter);
	return audioOut;
}

function draw() {
	
	
	// the -5 in the two following lines makes the canvas area, just slightly smaller
	// than the entire window.  this helps so the scrollbars do not appear.
	ctx.canvas.width  = window.innerWidth-5;
	ctx.canvas.height = window.innerHeight-5;
	ctx.strokeStyle = '#0000ff';
	
	ctx.lineWidth = 10;
	
	ctx.strokeRect(10,10,ctx.canvas.width-15, ctx.canvas.height-15);
	
	ctx.font = '16px sans-serif';
	
	var textOut = "Height: " + ctx.canvas.height + "\n";

	textOut += "Width: " + ctx.canvas.width + "\n";

	ctx.fillText  (textOut, 50, 50);
}
function mouseMoveHandler(e)
{
	// mousePos = {x:e.clientX,y:e.clientY}; // for later use
	ctx.clearRect(45,125,150,50);
	var textOut = "X: " + e.clientX +"\n";
	textOut += "Y: " + e.clientY + "\n";
	ctx.fillStyle = "#000000";
	ctx.fillText  (textOut, 50, 150); 
}
