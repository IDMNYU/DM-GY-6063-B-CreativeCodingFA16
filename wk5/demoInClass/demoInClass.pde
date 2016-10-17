Monster fred;

void setup(){
  background(255);
  size(800, 800);
  // this is where the class constructor gets called
  fred = new Monster(80, 180);  //fred is a new instance of the monster class
  
}



void draw(){
  background(255);
  fred.update(mouseX, mouseY);
  fred.display();
  
  
  
  
}