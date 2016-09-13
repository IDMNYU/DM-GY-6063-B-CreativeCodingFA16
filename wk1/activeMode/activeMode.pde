

// setup rns once//
void setup() {
  size(400, 400);
  background(200, 127, 12);
}


// draw is a loop. this is where the party is
//function definition
void draw() {
  noStroke();
  //ellipseMode(CORNER);
  fill(255, 50);
  ellipse(width/2, height/2, 50, 200);

  stroke(0);  // this is the outline to the ellipse + color
  fill(0, 0, 255);
  
  // with this line uncommented, the mouseX + mouseY
  // default to the upper left hand corner, the moment 
  // before it reconizes our mouse location. Hence, the
  // initial ellipse up in the crnr.
  //ellipse(mouseX, mouseY, 30, 30);
  
  //println(mouseX, mouseY);
  print("mouseX is: "); // no line returnn
  println(mouseX); // line return after

  print("mouseY is: ");
  println(mouseY);
}

// mouseDragged is another known function to Processing.
// It will execute when ever the mouse is dragged.

void mouseDragged(){
  ellipse(mouseX, mouseY, 30, 30);
}