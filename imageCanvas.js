funtion drawScreen(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	Context.fillStyle = "#2ecc71";
	Context.fillRect(0, 0, 1000, 700);
}
drawScreen();