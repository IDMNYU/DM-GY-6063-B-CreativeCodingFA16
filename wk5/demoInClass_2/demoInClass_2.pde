Monster fred; // declaring
Monster debby;

int x;

int y = 400; // declar + give a value

void setup(){
  background(255);
  size(800, 800);
  // this is where the class constructor gets called
  fred = new Monster(80, 180);  //fred is a new instance of the monster class
  //fred = new Monster();  // giving a value to fred. which instantiating it
  //debby = new Monster();
}



void draw(){
  background(255);
  fred.update(mouseX, mouseY); // method aka function
  //fred.eye( )
  fred.display(); // display is also a method
  
  
  
  
}

void mousePressed(){
  println(fred.tall);  // tall is property/data point we don't use ()
  
}