
void setup(){
  background(88, 170, 232);
  size(700,300);
  noStroke();
  //smooth();
}


void draw(){
  bump();   // funtion call
  
}

void bump(){
  int x = 0, y = 0;
  noStroke();
  fill(51,255,142);  //green
  ellipse(40 + x, 40 + y, 35, 35);
  fill(193, 154, 255);
  stroke(229, 206, 76);
  strokeWeight(1);
  ellipse(35 + x, 35 + y, 10, 10);
  ellipse(40 - x, 45 - y, 10, 10);
  ellipse(48 + x, 35 + y, 5, 5);
  
}
  