function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 146, 62);

}

function draw() {
  push(); //saves matrix coords
    translate(mouseX, mouseY); // new ones
    fill(87, 232, 206);
    rect(0, 0, 30, 30); //teal
  pop(); // restore old matrix coords
  
 
  translate(35, 10);
  fill(78, 110, 229);
  rect(0, 0, 30, 30); //blue
  
  

}

function mousePressed() {
  background(255, 146, 62);
}