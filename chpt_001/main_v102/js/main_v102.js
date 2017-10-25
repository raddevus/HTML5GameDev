// main_102.js

// function definition
function draw() {
	
	var theCanvas = document.getElementById("gamescreen");
	var ctx = theCanvas.getContext("2d");
	
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

window.addEventListener("resize", draw);

draw();
