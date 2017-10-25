// main_101.js

// function definition
function draw() {
	
	// 1. call JavaScript function getElementById to get a 
	// reference to the canvas element (id = gamescreen)
	var theCanvas = document.getElementById("gamescreen");
	// 2. create a drawing context object by calling
	// JavaScript function getContext on the Canvas element
	var ctx = theCanvas.getContext("2d");
	
	// 3. set the width of the context object to the width of the
	// client area of the browser window
	// the -5 in the two following lines makes the canvas area, just slightly smaller
	// than the entire window.  this helps so the scrollbars do not appear.
	ctx.canvas.width  = window.innerWidth-5;
	
	// 4. set the width of the context object to the height of the
	// client area of the browser window
	ctx.canvas.height = window.innerHeight-5;
	// 5. set the strokeStyle the drawing context will use
	// to the RGB value of blue -- it will draw the border in blue
	ctx.strokeStyle = '#0000ff';
	
	// 6. set the width of the line we are going to draw to 10 (pixels)
	ctx.lineWidth = 10;
	
	// 7. call the strokeRect function of the context object
	// This function draws (strokes like a pen) the line you see 
	// on screen.  We are stroking the rect -- outlining it butt
	// not filling it, so the rectangle is not filled (left white).
	ctx.strokeRect(10,10,ctx.canvas.width-15, ctx.canvas.height-15);
	
	// 8. set up the font we will use to draw our text on the screen
	ctx.font = '20px sans-serif';
	
	// 9. create a new textOut var to hold the text we will
	// output to the screen. Initialize it to the string 
	// with height value
	var textOut = "Height: " + ctx.canvas.height + "\n";
	// 10. Add the width text to the textOut string
	textOut += "Width: " + ctx.canvas.width + "\n";
	
	// 11. draw the text to the screen at location 50 (left) 50 (down)
	ctx.fillText  (textOut, 50, 50);
}

// call (run) the draw function
draw();
