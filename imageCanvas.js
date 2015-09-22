window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown", onkeydown, false);
/*window.addEventListener("keyup", onkeyup, false);
window.addEventListener("mousemove",onMouseMove,false);
window.addEventListener("mousedown",onMouseDown,false);
window.addEventListener("mouseup",onMouseUp,false);
*/

/*var strKeyEventType = "None";
var strKeyEventValue = "None";
*/
/*var bMouseClicked = false;
intMouseX = 480;
intMouseY = 300;
var strMouseStatus = "준비중";*/
var Game_STATE_READY = 0;
var Game_STATE_GAME = 1;
var Game_STATE_OVER = 2;


var GameState = Game_STATE_READY;

intPlayerX = 480;
intPlayerY = 300;

var ball = new Image();
ball.src = "ball.png";

var intervalID;

var tempBall1 = {x:0, y:0, go_x:1, go_y:1};
var tempBall2 = {x:800, y:0, go_x:-1, go_y:1};
var tempBall3 = {x:800, y:600, go_x:-1, go_y:-1};
var tempBall4 = {x:0, y:600, go_x:1, go_y:-1};

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
	Context.drawImage(imgPlayer, intPlayerX, intPlayerY, 100, 100);
	Context.fillStyle = "#000000";
	Context.font = '24px Arial';
	Context.fillStyle = "#000";
	Context.font = '24px nanumgothic';
	Context.textBaseline = "top";
	/*Context.fillText("입력된 키는 : " + strKeyEventValue, 5, 5);
	Context.fillText("키 입력상태는 : " + strKeyEventType, 5, 30);
	Context.fillText("발생한 마우스 이벤트는 : " + strMouseStatus,5 ,5);
	Context.fillText("마우스 좌표는 x : " + intPlayerX + " y : " + intPlayerY,5,30);*/
	
	if(GameState == Game_STATE_READY){
		Context.fillText("Ready!", 470, 250);
	}
	else if(GameState == Game_STATE_GAME){
		Context.fillText("Go!", 300, 200);
		Context.drawImage(ball, tempBall1.x, tempBall1.y);
		Context.drawImage(ball, tempBall2.x, tempBall2.y);
		Context.drawImage(ball, tempBall3.x, tempBall3.y);
		Context.drawImage(ball, tempBall4.x, tempBall4.y);
	}
	else if(GameState == Game_STATE_OVER){
		Context.font = '60px NanumGothicCoding';
		Context.fillText("GAME OVER", 400, 300);
	}
}

/*function onkeydown(e){
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
}*/
function onkeydown(e){
	if(GameState == Game_STATE_READY){
		GameState = Game_STATE_GAME;
		onGameStart();
	}
	else if(GameState == Game_STATE_GAME){
		switch(e.keyCode){
		case 37 : if(intPlayerX <= 0)
				break;
			  else 
				intPlayerX-=10; break;
		case 39 : if(intPlayerX >= 925)
				break;
		  	  else	
				intPlayerX+=10; break;
		case 38 : if(intPlayerY <=0)
				break;
		  	  else
				intPlayerY-=10; break;
		case 40 : if(intPlayerY >=670)
				break;
			  else
				intPlayerY+=10; break; 
			}
		drawScreen();
	}
	else if(GameState == Game_STATE_OVER){
		if(e.keyCode == 13){
			GameState = Game_STATE_READY;
		}
	}
}
function onGameStart(){
	intervalID = setInterval(MoveBall, 100);
}
function MoveBall(){
	tempBall1.x += tempBall1.go_x*10;
	tempBall1.y += tempBall1.go_y*10;
	tempBall2.x += tempBall2.go_x*10;
	tempBall2.y += tempBall2.go_y*10;
	tempBall3.x += tempBall3.go_x*10;
	tempBall3.y += tempBall3.go_y*10;
	tempBall4.x += tempBall4.go_x*10;
	tempBall4.y += tempBall4.go_y*10;
	drawScreen();
}