int x = 50;
int y = 120;
color grn; 
color slate;
color ltgrn;

void setup(){
  background(88, 170, 232);
  size(700,400);
  noStroke();
  //smooth();
  grn = color(51, 255, 142);
  slate = color(120, 216, 232);
  ltgrn = color(174, 255, 120);
}


void draw(){
  bump(50, 130, grn);   // funtion call
  bump(100, 50, slate);
  bump(200, 150, ltgrn);
  
}

void bump(int locX, int locY, color clr){
  x = locX;
  y = locY;
  noStroke();
  fill(clr);  //green
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


  