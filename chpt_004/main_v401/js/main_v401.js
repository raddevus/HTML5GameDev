// main_401.js

// function definition
var ctx = null;
var theCanvas = null;
window.addEventListener("load", initApp);
var audioCounter = 0;
var audio = null;
var tankTag = null;

function tank(tankInfo){
	this.x = tankInfo.x;
	this.y = tankInfo.y;
	this.imgTag = tankInfo.imgTag;
}

var allTanks = [];

function initApp()
{
	theCanvas = document.getElementById("gamescreen");
	ctx = theCanvas.getContext("2d");
	ctx.canvas.width  = window.innerWidth-5;
	ctx.canvas.height = window.innerHeight-5;
	
	window.addEventListener("mousemove", mouseMoveHandler);
	window.addEventListener("resize", draw);
	tankTag = document.getElementById("tank");
	// add 5 new tanks
	initAllTanks();
	draw();
}

function initAllTanks()
{
	var localTank = new tank({
		imgTag:tankTag,
		x:ctx.canvas.width - 52,
		y:ctx.canvas.height - 52,
		});

	allTanks.push(localTank);
	for (var x = 0;x < 4;x++)
	{
		localTank = new tank({
			imgTag:tankTag,
			x:getRandom(25,ctx.canvas.width - 52),
			y:getRandom(25,ctx.canvas.height - 52)
		});
		allTanks.push(localTank);
	}
}

function drawAllTanks()
{
	console.log(allTanks.length);
	for (var x =0;x < allTanks.length;x++)
	{
		ctx.drawImage(allTanks[x].imgTag,
			allTanks[x].x,
			allTanks[x].y);
	}
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
	drawAllTanks();
	
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
