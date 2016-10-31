var bird, skull, deadscape, forest;
var count = 0;
var fcount = 0;

function preload(){
  bird = loadImage("data/bird.png");
  skull = loadImage("data/skull.jpeg");
  deadscape = loadImage("data/Desolate-Winter-Landscape.jpg");
  forest = loadImage("data/dark-forest.jpg");
  
}


function setup() {
  createCanvas(800, 800);
  background(255);
  image(bird, width/2- bird.width/2, height/2 - bird.height/2);
  
}

function draw() {
  background(255);
  image(bird, width/2- bird.width/2, height/2 - bird.height/2);
  if( (mouseX > 300) && (mouseX < 501) && (mouseY > 268) && (mouseY < 518) ){
    console.log("yes");
    if(mouseIsPressed){
      background(255);
      image(skull, width/2- skull.width/2, height/2 - skull.height/2);
      count++;
      console.log(count);
    }
  }
  else {
    //console.log("no");
  }
  
  if(count >= 50){
    background(deadscape, 0, 0);
    fcount++;
  }
  if(fcount > 200){
    background(forest, 0, 0);
    
  }
  
  
}

function mouseClicked(){
  //console.log("Y is: " + mouseY);
}