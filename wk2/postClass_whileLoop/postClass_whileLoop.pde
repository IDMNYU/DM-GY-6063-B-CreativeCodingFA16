

void setup(){
  size(400, 400);
  
}


void draw(){
  //float rand = random(0, 100);
  
  float myVal = 10.0;
  while(myVal < 10){
    ellipse(10, 10, 200, 200);
    myVal += 2.3; // way to check or exit the loop
    println(myVal);
  }
  
  
}