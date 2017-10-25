// WhackASpot.js

// function definition
var ctx = null;
var theCanvas = null;
var canvasWidth = null;
var canvasHeight = null;
var allSpots = [];
var currentScore = 0;
var audioCounter = 0;
var audio = null;

window.addEventListener("load", initApp);

function initApp()
{
	theCanvas = document.getElementById("gamescreen");
	ctx = theCanvas.getContext("2d");
	
	window.addEventListener("mousemove", handleMouseMove);
	window.addEventListener("resize", draw);
	setInterval(renderSpots, 500);
	setInterval(eraseSpots,800);

	draw();
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

function eraseSpots(){
	var localSpot = allSpots[0];
	allSpots.shift();
	ctx.fillStyle = '#ffffff';
	ctx.fillRect(localSpot.x,localSpot.y,localSpot.width,localSpot.height);
	ctx.fill();
}

function spot(spotItem){
	this.x = spotItem.x;
	this.y = spotItem.y;
	this.width = spotItem.width;
	this.height = spotItem.height;
	this.pointValue = getPointValue(spotItem.width);
	function getPointValue(size){
		if (size <=7)
		{
			return 15;
		}
		else
		{
			return 5;
		}
	}	
}

function renderSpots(){

	var size = Math.ceil(Math.random()*20) + 3;
	var xLocation = Math.ceil(Math.random()*(canvasWidth-20-size))+10;
	var yLocation = Math.ceil(Math.random()*(canvasHeight-30-size))+10;
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
	allSpots.push(new spot({
		x:xLocation,
		y:yLocation,
		width:size,
		height:size
	}));
	ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
	ctx.fillRect(xLocation,yLocation,size,size);
}

function draw() {
	
	
	// the -5 in the two following lines makes the canvas area, just slightly smaller
	// than the entire window.  this helps so the scrollbars do not appear.
	canvasWidth = ctx.canvas.width  = window.innerWidth-5;
	canvasHeight = ctx.canvas.height = window.innerHeight-5;
	ctx.strokeStyle = '#0000ff';
	
	ctx.lineWidth = 10;
	
	ctx.strokeRect(10,10,ctx.canvas.width-15, ctx.canvas.height-15);
	
}

function displayScore(){
	
	ctx.clearRect(20,ctx.canvas.height-30,140,30);
	ctx.fillStyle = "black";
	ctx.font = '14px sans-serif';
	var scoreText = "Score: " + currentScore;
	ctx.fillText(scoreText, 40, ctx.canvas.height-15,140,30)
	ctx.strokeStyle = '#0000ff';
	ctx.strokeRect(10,10,ctx.canvas.width-15, ctx.canvas.height-15);
}
function handleMouseMove(e)
{
	var hoverItem = hitTest({x:e.clientX,y:e.clientY},allSpots);

	if (hoverItem !== null)
	{
		
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(hoverItem.x,hoverItem.y,hoverItem.width,hoverItem.height);
		currentScore+=hoverItem.pointValue;
		hoverItem = null;
		displayScore();
		audio = getAudioElement("bell");
		audio.play();

	}
	
}

function hitTest(mouseLocation, hitTestObjects)
{
	for (var objCount=0;objCount < hitTestObjects.length;objCount++)
	{
		var testObjXmax = hitTestObjects[objCount].x + hitTestObjects[objCount].width;
		var testObjYmax = hitTestObjects[objCount].y + hitTestObjects[objCount].height;
		if ( ((mouseLocation.x >= hitTestObjects[objCount].x) && (mouseLocation.x <= testObjXmax)) && 
		((mouseLocation.y >= hitTestObjects[objCount].y) && (mouseLocation.y <= testObjYmax)))
		{
			return hitTestObjects[objCount];
		}
	}
	return null;
}

