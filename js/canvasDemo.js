// Demo adapted from http://html5.litten.com/simple-animation-in-the-html5-canvas-element

var canvas;
var ctx;
var x = 320;
var y = 180;
var dx = 2;
var dy = 4;
var WIDTH = 320;
var HEIGHT = 180;

function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.fill();
}

function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  bounce = setInterval(draw, 10);
  return bounce;
}

function draw() {
  clear();
  ctx.fillStyle = "#3a87ad";
  rect(0,0,WIDTH,HEIGHT);
  ctx.fillStyle = "#f89406";
  circle(x, y, 10);

  if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;
  if (y + dy > HEIGHT || y + dy < 0)
    dy = -dy;

  x += dx;
  y += dy;
}

function stop() {
  clearInterval(bounce);
}

init();

// Stop button
$('#stop-bounce').click(function() {
  stop();
});
// Start button
$('#start-bounce').click(function() {
  init();
});

