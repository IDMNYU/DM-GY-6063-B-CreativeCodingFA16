var z_ =0;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  //cylinder(50, 50);
}

var theta = 0;

function draw(){
  z_ = z_ - 25;
  if( z_ > 600){
    z_ = 0;
  }
  console.log(z_);
  
  background(255, 255, 255, 255);
  translate(-width/2 + 250, 0, z_);
  normalMaterial();
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  plane(50);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  box(50, 50, 50);
  pop();
  
  
  translate(250, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  cylinder(50, 50);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  cone(50, 50);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  torus(50, 10);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  sphere(50);
  pop();
 
  theta += 0.05;
}