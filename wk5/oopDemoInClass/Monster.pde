class Monster {
  // global for the class
  // I can access these outside of the class via dot syntaz
  // data
  int w = 800;
  color wort = color(181, 35, 203);
  float wanderX, wanderY;

  int x, y;

  Monster(int xLoc, int yLoc) {  // values passed in, on construction
    x = xLoc;
    y = yLoc;
  }

  // a "method" is a function that exists inside of a class
  
  void display() {
    //Monster Body
    smooth();

    curve(w/2 - 100 + x, w/2-100 + y, w/2 - 50 + x, w/2-200 + y, w/2 + 10 + x, w/2 -100 + y, w/2 -20 + x, w/2 + 20 + y); //left antenna
    curve(w/2 + 120 + x, w/2-80 + y, w/2 + 50 + x, w/2-200 + y, w/2 - 10 + x, w/2 - 100 + y, w/2 -20 + x, w/2 + 40 + y); //right antenna
    fill(59, 275, 64); //darker green
    ellipse(w/2 + x, w/2 + y, 120, 160); //body
    fill(wort); // purple
    noStroke(); 
    ellipse(w/2 - 20 + x, w/2 + 30 + y, 20, 10);  //wart

    // head
    fill(59, 220, 64); // lighter green
    stroke(0); 
    ellipse(w/2 + x, w/2 - 120 + y, 100, 80); //head
    fill(0);
    rect(w/2 - 25 + x, w/2 - 105 + y, 60, 1); //mouth
    fill(255);
    triangle(w/2 + 15 + x, w/2 - 90 + y, w/2 + x, w/2-105 + y, w/2 + 30 + x, w/2 - 105 + y); //tooth
    // eyes
    fill(193, 255, 64); //greenish yellow
    ellipse(w/2 - 15 + x, w/2 - 120 + y, 15, 15); //left eye
    ellipse(w/2 + 25 + x, w/2 - 120 + y, 15, 15); //right eye
    fill(0);
    ellipse(w/2 - 15 + 0 + x + wanderX, w/2 - 120 + 0 + y + wanderY, 5, 5); //left pupil
    ellipse(w/2 + 25 + 0 + x + wanderX, w/2 - 120 + 0 + y + wanderY, 5, 5); //right pupil
    noFill();
    // end eyes
    // rest of head
    fill(60, 189, 64); //lighter green
    ellipse(w/2 - 50 + x, w/2 - 200 + y, 20, 20); // left antenna point
    ellipse(w/2 + 50 + x, w/2 - 200 + y, 20, 20); // right antenna point
    noFill();
  }

  void update() {
    wanderX = map(mouseX, 0, width, -5, 4);
    wanderY = map(mouseX, 0, width, -5, 2);
  }
  
  void move(int valA, int valB){
    x += valA;
    
  }


}