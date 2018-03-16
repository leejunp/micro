$(".move-area").mousemove(function(event) {
  var eye = $(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});

//on click color change

var button = document.querySelector('.monster');

button.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);
 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};

//Click

var theThing = document.querySelector("#thing");
var container = document.querySelector(".box");

container.addEventListener("click", function(event) {
	var xPosition = event.clientX - container.getBoundingClientRect().left - (theThing.clientWidth / 2);
	var yPosition = event.clientY - container.getBoundingClientRect().top - (theThing.clientHeight / 2);
	theThing.style.left = xPosition + "px";
	theThing.style.top = yPosition + "px";

  var button = document.querySelector('.smonster');

  button.onclick = function () {
   var red = Math.floor(Math.random() * 256);
   var blue = Math.floor(Math.random() * 256);
   var green = Math.floor(Math.random() * 256);
   this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  };
	}
);
