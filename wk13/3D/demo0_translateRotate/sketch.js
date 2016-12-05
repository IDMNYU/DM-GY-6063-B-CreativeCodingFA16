function setup() {
  createCanvas(710, 400, WEBGL);
}


function draw() {
  
  push();
  translate(50, 50, 100);
  if(mouseIsPressed){
    ambientLight(150);
  }
    //ambientLight(0);
   //directionalLight(255, 0, 0, 0, 10, 30, 0);
  
  sphere(80);

  translate(-50-50, -50-50, -100);
  rotateY(radians(45));
  box(50, 40);
  pop();
}