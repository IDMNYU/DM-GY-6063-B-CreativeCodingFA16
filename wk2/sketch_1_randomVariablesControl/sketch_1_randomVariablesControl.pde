// variables declared up here are global.
float x;  // int is the size, x is what it'll be known as
float y;

boolean switcher;

// can also do this: int x, y;

void setup() {
  size(1000, 300);
  frameRate(8);
  background(113, 181, 232);
}


void draw() {
 
  fill(255, 217, 142, 30); // 4th parameter is alpha/opacity
  stroke(121, 97, 77);
  //when the 3 parameter is used within ellipse, the random function
  // is executed. 50 is passed to the random function upon it being
  // called. In doing so, we ask for a random value to be given back to us, 
  // between 0 - 50. If we pass random one value, we tell it the max # within a
  // range.
  ellipse(x, y, random(50), random(50)); // draw a circle - x,y,w,h

  // here, we call random again, giving a minimum value for the bottom
  // of the range, as well as a maximum value. 
  // Then we add our current value of x to it, and make that the new value.
  x = x + random(-25, 25);
  y = y + random(-25, 25);

  if (frameCount%5 == 0) {

    for (int i = 0; i < 20; i++) {
      fill(59, 255, 86, 100);
      noStroke();
      ellipse(mouseX + random(40), mouseY + random(40), 3, 3);
    }
    //stars();
  }

/*

  float rand = random(0, 1);
  if(rand < .8){
    switcher = false;
  }
  else {
    switcher = true;
  }
  
  
  if(switcher == true){
    fill(207, 232, 108);
  }
  if(switcher == false){
    fill(0);
  }
  noStroke();
  ellipse(100, 200, 50, 60);
  
  */
  
  
  /*
   background(255); // one number 0-255 is dark to light
  fill(255, 0, 255);
  rectMode(RADIUS);
  rect(mouseX, mouseY, 50, 50); // square
  rectMode(CORNER);
  fill(0);
  rect(mouseX, mouseY, 50, 50); // square
  rectMode(CENTER);
  fill(255, 255, 0);
  rect(mouseX, mouseY, 50, 50); // square
  */
  
  // the if-statements below keep the random values within our sketch
  // other wise, our values for x & y would eventually be beyond our sketch size
  // it is possible to be drawing, but off your sheet of paper.
  if (x<0) {
    x = width;
  }
  if (y<0) {
    y = height;
  }
  if (x>width) {
    x = 0;
  }
  if (y>height) {
    y = 0;
  }
}

/*
void stars(){
 for(int i = 0; i < 20; i++){
 fill(59, 255, 86, 100);
 noStroke();
 ellipse(mouseX + random(40), mouseY + random(40), 3, 3);
 
 }
 }
 
 */


void keyPressed() {
  background(113, 181, 232);
}