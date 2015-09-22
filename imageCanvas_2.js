window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown", onkeydown, false);
window.addEventListener("keyup", onkeyup, false);
window.addEventListener("mousemove",onMouseMove,false);
window.addEventListener("mousedown",onMouseDown,false);
window.addEventListener("mouseup",onMouseUp,false);

var strKeyEventType = "None";
var strKeyEventValue = "None";

var bMouseClicked = false;
intMouseX = 480;
intMouseY = 300;
var strMouseStatus = "준비중";

var imgBackground = new Image();
imgBackground.src = "back.png";

var imgPlayer = new Image();
imgPlayer.src = "bird.png";

imgBackground.addEventListener("load",drawScreen, false);
imgPlayer.addEventListener("load",drawScreen, false);

function drawScreen(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	Context.drawImage(imgBackground, 0, 0, 1024,768);
	
	Context.fillStyle = "#ff0";
	Context.fillRect(0,0,1024,768);
	Context.drawImage(imgPlayer, intMouseX, intMouseY, 100, 100);
	Context.fillStyle = "#000000";
	Context.font = '24px Arial';
	Context.fillStyle = "#000";
	//Context.font = '24px nanumgothic';
	Context.textBaseline = "top";
	Context.fillText("입력된 키는 : " + strKeyEventValue, 5, 5);
	Context.fillText("키 입력상태는 : " + strKeyEventType, 5, 30);
	Context.fillText("발생한 마우스 이벤트는 : " + strMouseStatus,5 ,5);
	Context.fillText("마우스 좌표는 x : " + intMouseX + " y : " + intMouseY,5,30);
}

function onkeydown(e){
	strkeyEventType = e.type;
	if(e.keyCode)code = e.keyCode;
	strKeyEventValue = code;
	drawScreen();
}

function onkeyup(e){
	strkeyEventType = e.type;
	if(e.keyCode)code = e.keyCode;
	strKeyEventValue = code;
	drawScreen();
}

function onMouseDown(e){
	strMouseStatus = "클릭!";
	var theCanvas = document.getElementById("GameCanvas");
	bMouseClicked = true;
	intMouseX = e.clientX - theCanvas.offsetLeft - 42;
	intMouseY = e.clientY - theCanvas.offsetTop - 50;
	drawScreen();
}

function onMouseMove(e){
	strMouseStatus = "Moving now";
	if(bMouseClicked){
		var theCanvas = document.getElementById("GameCanvas");
		intMouseX = e.clientX - theCanvas.offsetLeft - 42;
		intMouseY = e.clientY - theCanvas.offsetTop - 50;
		drawScreen();
	}
}

function onMouseUp(e){
	strMouseStatus = "클릭 끝!";
	bMouseClicked = false;
	intMouseX = 480;
	intMouseY = 300;
	drawScreen();
}
funtion onkeydown(e){
	switch(e.keycode){
		case 37 : intPlayerX-=10; break;
		case 39 : intPlayerX+=10; break;
		case 38 : intPlayerY-=10; break;
		case 40 : intPlayerY+=10; break;
	}
	drawScreen();
}