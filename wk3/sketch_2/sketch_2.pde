int x = 50;
int y = 120;

void setup(){
  background(88, 170, 232);
  size(700,400);
  noStroke();
  //smooth();
}


void draw(){
  bump(50, 130);   // funtion call
  
}

void bump(int locX, int locY){
  x = locX;
  y = locY;
  noStroke();
  fill(51,255,142);  //green
  ellipse(40 + x, 40 + y, 35, 35);
  fill(193, 154, 255); // purple
  stroke(229, 206, 76); // orange
  strokeWeight(1);
  ellipse(35 + x, 35 + y, 10, 10);
  ellipse(40 + x, 45 + y, 10, 10);
  noStroke();
  fill(241, 188, 255); // light purple
  ellipse(48 + x, 35 + y, 5, 5);
  //println(x);
  //println(y);
  
}
  