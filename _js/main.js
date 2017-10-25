// main.js

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
	ctx.canvas.width  = window.innerWidth -4;
	
	// 4. set the width of the context object to the height of the
	// client area of the browser window
	ctx.canvas.height = window.innerHeight-4;
	// 5. set the strokeStyle the drawing context will use
	// to the RGB value of blue -- it will draw the border in blue
	ctx.strokeStyle = '#0000ff';
	
	// 6. set the width of the line we are going to draw to 10 (pixels)
	ctx.lineWidth = 10;
	
	// 7. call the strokeRect function of the context object
	// This function draws (strokes like a pen) the line you see 
	// on screen.  We are stroking the rect -- outlining it butt
	// not filling it, so the rectangle is not filled (left white).
	ctx.strokeRect(0,0,ctx.canvas.width, ctx.canvas.height);
	
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
