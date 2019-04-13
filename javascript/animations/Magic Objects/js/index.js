var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var mouseX = 0;
var mouseY = 0;
var a = 0.2;
var t = 0;
var aStep = Math.PI * 0.01;
var globalHue = 0;

init();

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });



  update();

}

function update() {
  requestAnimationFrame(update);
  var time = performance.now() / 60;

  // do stuff here
  a = Math.sin(2 - time * 0.0001);
  t = Math.sin(2 + time * 0.03);
  //aStep = (Math.sin(time * 0.01) + 1.5) * 0.25
  aStep = Math.PI * (0.375 + Math.sin(time * 0.001) * 0.125);

  globalHue += 10;

  draw();
}

function draw() {


  // clear canvas

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // line
  var cx = window.innerWidth / 2;
  var cy = window.innerHeight / 2;
  var x, y, px, py;
  var radius = 0,pradius = 0;
  var totalAngle = Math.PI * 200;
  for (var theta = 0; theta < totalAngle; theta += aStep) {

    pradius = radius;
    radius = (t + Math.pow(2, Math.cos(theta * a))) * 200;
    px = x;
    py = y;
    x = cx + Math.cos(theta) * radius;
    y = cy + Math.sin(theta) * radius;

    if (theta > 0) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(px, py);

      var dx = x - px;
      var dy = y - py;
      var lineSize = Math.sqrt(dx * dx + dy * dy);

      var r = pradius + (radius - pradius) / 2;

      var hue = globalHue + theta / Math.PI * 180;
      ctx.strokeStyle = "hsl(" + hue + ", 100%, 50%)";
      //ctx.lineWidth=clamp(map(r, -200, 200, 0.25, 2), 0.25, 10);
      ctx.lineWidth = .5;
      ctx.stroke();
      ctx.closePath();
    }

  }


}

function map(value, start1, stop1, start2, stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

function clamp(value, min, max) {
  return value < min ? min : value > max ? max : value;
}