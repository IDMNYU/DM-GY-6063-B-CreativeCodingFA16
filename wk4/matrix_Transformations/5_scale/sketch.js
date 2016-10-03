function setup() {
  createCanvas(windowWidth, windowHeight);
  background(49, 232, 132);
}

function draw() {

  translate(mouseX, mouseY);
  var scalar = mouseX / 60.0;
  //scale(mouseX/60.0);
  scale(scalar);
  strokeWeight(1.0 / scalar);
  fill(232, 229, 87);
  rect(-15, -15, 30, 30);

}