/* DRAWING PART */
if(window.addEventListener) {
	window.addEventListener('load', function () {
		var canvas, context, draw;

	// Cursor position
	draw = {
		started: false,
		start: function(event) {

			context.beginPath();

			context.moveTo(
				event.pageX - this.offsetLeft, 
				event.pageY - this.offsetTop
				);

			this.started = true;
		},
		move: function(event) {

			if (this.started) {

				context.lineTo(
					event.pageX - this.offsetLeft, 
					event.pageY - this.offsetTop
					);

				context.lineWidth=10;
				context.lineCap="round";
				context.strokeStyle = '#ff0000';
				context.stroke();
			}

		},
		end: function(event) {
			this.started = false;
		}
	};

	// Canvas & Context
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');

	// Full Window Size Canvas
	context.canvas.width = window.innerWidth;
	context.canvas.height = window.innerHeight;
	
	// context.font="30px Arial";
	// context.fillText("Start Drawing :-)", 10, 100);

	// Events
	canvas.addEventListener('touchstart', draw.start, false);
	canvas.addEventListener('touchend', draw.end, false);
	canvas.addEventListener('touchmove', draw.move, false);
	canvas.addEventListener('mousedown', draw.start, false);
	canvas.addEventListener('mousemove', draw.move, false);
	canvas.addEventListener('mouseup', draw.end, false);

	// bind event handler to clear button
      document.getElementById('clear').addEventListener('click', function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }, false);

});

// Disable Page Move
document.body.addEventListener('touchmove',function(event){
	event.preventDefault();
},false);
}