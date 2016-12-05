function setup() {
  createCanvas(640, 360, WEBGL);
}



function draw() {
  background(0);
  camera(mouseX, height/2, (height/2) / tan(PI/6));
  translate(width/2, height/2, -100);
  stroke(255);
  noFill();
  box(200);
}