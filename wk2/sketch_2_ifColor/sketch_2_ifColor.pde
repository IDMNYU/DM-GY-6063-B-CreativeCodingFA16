int x = 0;
int y = 0;

int r = 0;
int g = 0;
int b = 0;

void setup() {
  size(800, 600);
  background(255); // one number 0-255 is dark to light
}

void draw() {
  // painter's algorithm
  fill(r, g, b);
  rectMode(CORNER);
  rect(x, y, 40, 40); // square
  x = x+50;
  r = r + 50;
  if (x>width) { // test
    // TRUE:
    x = 0;
    //y = y + 50;
    //r = 0;
    //g = g+50;
  }
  if (y>height) { // another test
    // TRUE
    x = 0;
    //y = 0;
   // r = 0;
   // g = 0;
   // b = b+50;
   // if (b > 255) b = 0;
  }
}