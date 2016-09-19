
// this only runs once
void setup() {
  size(600, 800);
  background(200, 127, 12);

  //frameRate(5);
}


// draw loops
// this is where the party is
void draw() {

  // white circle. Drawn first so on the bottom...
  noStroke();
  ellipseMode(CORNER);
  fill(255, 50); //white
  ellipse(width/2, height/2, 50, 200);


  // line(x1, y1, x1, y2);
  stroke(0, 0, 127);
  strokeWeight(3);
  fill(127, 127, 5);
  line(20, 400, 500, 750);

  ellipseMode(CENTER);

  // our interactive guy. They are drawn inbetween ellipse
  // the go in between the circles.
  stroke(255);
  strokeWeight(1);
  fill(0, 127);
  ellipse(mouseX, mouseY, 30, 30);

  //blue. I'm drawn last so I'm on the top. No body gets over
  // me
  fill(0, 0, 255); //blue
  ellipse(width/2, height/2, 50, 200);


  /*  // uncomment to see now fly above both ellipse
   // since it's the last one drawn, it's on top of
   // both. But we only see one (versus two (including
   // the one above) because the 2 are drawn on top of one 
   // another
   stroke(255);
   fill(0);
   ellipse(mouseX, mouseY, 30, 30);
   */

  if (mousePressed) {  // if what ever is inside the () is true, then we
    // will execute what is between the {}
    //background(0);
    background(200, 127, 12);
  }
  
  if(keyPressed){
    if(key == 32){
      strokeWeight(1);
      stroke(169, 38, 229);
      line(0, mouseY, width, mouseY);
      line(mouseX, 0, mouseX, height);
    }
  }

  println(mouseX);
  
  
}