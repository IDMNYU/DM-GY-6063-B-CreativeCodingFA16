//int x = 50;
//int y = 120;
// global scope - who has access/. 
color grn; 
color slate;
color ltgrn;

int step = 0;
int stepY;
int acc = 1;
float rand = 0;
int myVar = 1;

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
  //myVar++;
  grn = color(51, 255, 142);
  //float rand = 0;
  background(88, 170, 232);

  if (mousePressed) {
    step += 5; // step = step + 5;
    //println(step);
    //rand += random(0, 3) + 3;
    println(step);
    if (step > width) {
      step = -100;
    }
  }

  if (keyPressed) {
    println("key is: ", key); 
    if (key == 'w') {
      acc += 3
      step -= acc;
    }
    
    if ( (key == 'a') || (key == 'A') || (key == 'Q') || (key == 'q')) {
      stepY -= 2;
      if (stepY < -180) {
        stepY = 216;
      } // stepY limits

      /* 
       if(key == 'h'){
       println("HELLOOOOOOOOOOO");
       }
       */
    } // key a or q
  }

  bump(50 + step, 130 + stepY, grn);   // function call
  //bump(100 + step, 50, slate);
  bump(200, int(150 + rand), ltgrn);

  float result = mathDemo(step, stepY);
  println(result);
  if (result > 100) {
    //do something else;
  }
}

void bump(int locX, int locY, color clr) {
  int x = locX; // local
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

float mathDemo(int valA, int valB) { // int valC, float valD){
  // valC, valA, valB THESE ARE ALL LOCAL VARIABLES - not Pope, Kanye; this is your neighbor + goldfish
  float valC = valA + valB; // + vburgers + name;
  //valA++;
  //int valE = valC + valD;
  // return variable is singluar, don't multiples, espcially those of different data types
  return valC; //, valE
}

void mousePressed() {
  //x+=5;
}