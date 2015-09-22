Context.beginPath();
Context.moveTo(10, 10);
Context.lineTo(150, 100);
Context.strokeStyle="#000";
Context.Stroke();

Context.beginPath();
Context.arc(200, 30, 50, 1*Math.PI, 2*Math.PI, true);
Context.fillStyle="#ff0";
Context.fill();