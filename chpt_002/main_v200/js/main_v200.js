// main_200.js

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
	

	draw();
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
	ctx.fillStyle = "lightblue";
	ctx.fillRect(45,125,150,50);
	//ctx.clearRect(45,125,150,50);
	var textOut = "X: " + e.clientX +"\n";
	textOut += "Y: " + e.clientY + "\n";
	ctx.fillStyle = "#000000";
	ctx.fillText  (textOut, 50, 150); 
}
