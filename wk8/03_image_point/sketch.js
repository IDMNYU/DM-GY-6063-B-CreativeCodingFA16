var img;
var pointillize = 16;

function preload() {
  img = loadImage("data/bird.png");
  
}

function setup(){
  createCanvas(256, 256);
  background(0);
}

function draw() {
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  
  img.loadPixels(); // load pixels of the image
  var loc = (x + y * img.width) * 4;
  var r = img.pixels[loc];
  var g = img.pixels[loc +  1];
  var b = img.pixels[loc +  2];
  
  noStroke();
  fill( r, g, b, 100);
  ellipse(x, y, pointillize, pointillize);
  
}