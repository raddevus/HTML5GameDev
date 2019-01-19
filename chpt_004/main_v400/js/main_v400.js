// main_400.js

// function definition
var ctx = null;
var theCanvas = null;
window.addEventListener("load", initApp);
var audioCounter = 0;
var audio = null;
var tankTag = document.getElementById("tank");

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
	audio = getAudioElement("bell");
	audio.play();
	
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
	
	ctx.drawImage(tankTag,30,30);
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
