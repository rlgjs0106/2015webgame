window.addEventListener("load", drawScreen, true);
function drawScreen(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	
	Context.fillStyle = "#2ecc71";
	Context.fillRect(0, 0, 1000, 700);

	Context.beginPath();
	Context.moveTo(200, 250);
	Context.lineTo(200, 350);
	Context.strokeStyle="#000";
	Context.stroke();

	



	Context.beginPath();
	Context.arc(200, 200, 80, 1*Math.PI, 2*Math.PI, false);
	Context.fillStyle="#ff0";
	Context.fill();
	
	Context.beginPath();
	Context.arc(200, 200, 50, 1*Math.PI, 2*Math.PI, true);
	Context.fillStyle="#ff0";
	Context.fill();

	Context.beginPath();
	Context.arc(230, 200, 10, 1*Math.PI, 2*Math.PI, false);
	Context.fillStyle="#000";
	Context.fill();
	
	Context.beginPath();
	Context.arc(230, 200, 10, 1*Math.PI, 2*Math.PI, true);
	Context.fillStyle="#000";
	Context.fill();

	Context.beginPath();
	Context.arc(170, 200, 10, 1*Math.PI, 2*Math.PI, false);
	Context.fillStyle="#000";
	Context.fill();
	Context.beginPath();
	Context.arc(170, 200, 10, 1*Math.PI, 2*Math.PI, true);
	Context.fillStyle="#000";
	Context.fill();

	Context.beginPath();
	Context.arc(200, 230, 10, 1*Math.PI, 2*Math.PI, true);
	Context.fillStyle="#f00";
	Context.fill();

	var gradient=Context.createLinearGradient(0, 0, 170, 0);
	gradient.addColorStop("0", "magenta");
	gradient.addColorStop("0.5", "blue");
	gradient.addColorStop("1.0", "red");
	
	Context.strokeStyle=gradient;
	Context.lineWidth=5;
	Context.strokeRect(110, 100, 180, 300);
	
	

	
}