// main_402.js

// function definition
var ctx = null;
var theCanvas = null;
window.addEventListener("load", initApp);
var audioCounter = 0;
var audio = null;
var tankTag = null;
var mainTank = null;

var otherTank = null;

function tank(tankInfo){
	this.x = tankInfo.x;
	this.y = tankInfo.y;
	this.rotateDegrees = tankInfo.degrees || 0,
	this.imgTag = tankInfo.imgTag;
}

var allTanks = [];

function initApp()
{
	theCanvas = document.getElementById("gamescreen");
	ctx = theCanvas.getContext("2d");
	ctx.canvas.width  = window.innerWidth-5;
	ctx.canvas.height = window.innerHeight-5;
	window.addEventListener("keydown", rotateTank);
	window.addEventListener("mousemove", mouseMoveHandler);
	window.addEventListener("resize", draw);
	tankTag = document.getElementById("tank");

	initTank();
	otherTank = new tank({
		imgTag:tankTag,
		x:52,
		y:52
		});
	
	draw();
}

function rotateTank(evt)
{
	switch (evt.keyCode)
	{
		case 37 :
		{
			mainTank.rotateDegrees -=5;
			draw();
			break;
		}
		case 39 : //right
		{
			mainTank.rotateDegrees +=5;
			draw();
			break;
		}
		//drawTank();
	}
	
	console.log("rotating...: " + mainTank.rotateDegrees);
}

function initTank()
{
	mainTank = new tank({
		imgTag:tankTag,
		x:ctx.canvas.width - 52,
		y:ctx.canvas.height - 52,
		});
}

function drawTank()
{
	ctx.drawImage(otherTank.imgTag,
			otherTank.x,
			otherTank.y); 
	rotateImage(mainTank.imgTag,mainTank.x,mainTank.y,32,32,mainTank.rotateDegrees);
	
}

function rotateImage(img,x,y,width,height,deg){

    //Convert degrees to radian 
    var rad = deg * Math.PI / 180;

    //Set the origin to the center of the image
    ctx.translate(x + width / 2, y + height / 2);

    //Rotate the canvas around the origin
    ctx.rotate(rad);

    //draw the image    
    ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);

    //reset the canvas  
    ctx.rotate(rad * ( -1 ) );
    ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
}

function getRandom(min, max)
{
	return Math.ceil(Math.random() * (max - min + 1));
}

function getAudioElement(idPrefix)
{
	// This method also uses the audioCounter to loop through the 
	// audio tags so overlapping sounds can play -- makes it seem faster.
	var audioOut;
	audioOut = document.getElementById(idPrefix + audioCounter);
	console.log(idPrefix+audioCounter)
	roundRobinAudioCounter();
	return audioOut;
}

function roundRobinAudioCounter()
{
	switch (audioCounter)
	{
		case 0:
			{
				audioCounter++;
				break;
			}
		case 1:
			{
				audioCounter++
				break;
			}
		case 2:
		{
			audioCounter = 0;
			break;
		}
	}
}

function draw() {
	
	
	// the -5 in the two following lines makes the canvas area, just slightly smaller
	// than the entire window.  this helps so the scrollbars do not appear.
	ctx.canvas.width  = window.innerWidth-5;
	ctx.canvas.height = window.innerHeight-5;

	ctx.strokeStyle = '#0000ff';
	
	ctx.lineWidth = 10;
	
	ctx.strokeRect(10,10,ctx.canvas.width-15, ctx.canvas.height-15);
	drawTank();
	
}
function mouseMoveHandler(e)
{
	// mousePos = {x:e.clientX,y:e.clientY}; // for later use
/*	ctx.clearRect(45,125,150,50);
	var textOut = "X: " + e.clientX +"\n";
	textOut += "Y: " + e.clientY + "\n";
	ctx.fillStyle = "#000000";
	ctx.fillText  (textOut, 50, 150);  */
}
