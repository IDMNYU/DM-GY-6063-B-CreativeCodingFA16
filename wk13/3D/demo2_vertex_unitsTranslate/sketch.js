function setup() {
  createCanvas(640, 360, WEBGL);
}

function draw() {
  //background(0);

  //translate(width / 2, height / 2, 0);
  stroke(255);
  rotateX(PI / 2);
  rotateZ(-PI / 6);
  noFill();
  //fill(255, 0, 0);

  beginShape();
  vertex(-100, -100, -100);
  vertex(100, -100, -100);
  vertex(0, 0, 100);

  vertex(100, -100, -100);
  vertex(100, 100, -100);
  vertex(0, 0, 100);

  vertex(100, 100, -100);
  vertex(-100, 100, -100);
  vertex(0, 0, 100);

  vertex(-100, 100, -100);
  vertex(-100, -100, -100);
  vertex(0, 0, 100);
  endShape();
}