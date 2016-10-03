var angle = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(49, 232, 132);
}

function draw() {
  translate(mouseX, mouseY); // spin shape in place
  rotate(angle);
  //translate(mouseX, mouseY); //upper left crnr
  rect(-15, -15, 30, 30);
  angle += 0.1;
}