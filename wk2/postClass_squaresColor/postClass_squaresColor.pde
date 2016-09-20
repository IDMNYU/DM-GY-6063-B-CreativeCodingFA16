int x = 0;
int y = 0;

int r = 0;
int g = 0;
int b = 0;

void setup(){
  size(800, 600);
  background(255);
}


void draw(){
  fill(r, g, b);
  //fill(int(map(r, 0, 850, 0, 255)), g, b); // 255
  rectMode(CORNER);
  rect(x, y, 40, 40);
  x = x + 50;
  r = r + 50;
  println(r);
  if(x > width){
    x = 0;
    y += 50;
    r = 0;
    g += 50;
  }
  if( y > height){
    x = 0;
    y = 0;
    g = 0;
    b = b+ 50;
   //if(b > 255){ b = 0; g = 255; }
   if(b > 255){
     b = 0;
    // g = 255;
   }
  
  }
}