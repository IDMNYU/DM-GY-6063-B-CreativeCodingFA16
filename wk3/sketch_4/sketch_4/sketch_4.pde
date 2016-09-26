//int x = 50;
//int y = 120;
color grn; 
color slate;
color ltgrn;

int step = 0;
int stepY;
int acc = 1;
float rand = 0;

void setup() {
  background(88, 170, 232);
  size(700, 400);
  noStroke();
  //smooth();
  grn = color(51, 255, 142);
  slate = color(120, 216, 232);
  ltgrn = color(174, 255, 120);
}


void draw() {
  //float rand = 0;
  background(88, 170, 232);

  if (mousePressed) {
    step += 5;
    //rand += random(0, 3) + 3;
    
    if (step > width) {
      step = -100;
      
    }
  }

  if (keyPressed) {
    println("key is: ", key); 
    if (key == 'w') {
     step -= (acc+3);
    }
    
    if( (key == 'a') || (key == 'A') || (key == 'Q') || (key == 'q')){
      stepY -= 2;
      
      if(stepY < -180){
        stepY = 216;
      } // stepY limits
    } // key a or q
    
  }

  bump(50 + step, 130 + stepY, grn);   // funtion call
  bump(100 + step, 50, slate);
  bump(200, int(150 + rand), ltgrn);
  
  int result = mathDemo(step, stepY);
  //println(result);
}

void bump(int locX, int locY, color clr) {
  int x = locX;
  int y = locY;
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

int mathDemo(int valA, int valB){
  int valC = valA + valB;
  return valC;
  
}

void mousePressed() {
  //x+=5;
}