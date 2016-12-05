/*
Directional light comes from one direction and is 
stronger when hitting a surface squarely and weaker
if it hits at a gentle angle. After hitting a surface,
a directional lights scatters in all directions. A 
directional light is specified with an RGB color and 
an xyz vector that defines a direction for the light.
*/

function setup() {
  createCanvas(710, 400, WEBGL);
}


function draw() {
  
  push();
  translate(50, 50, 100);
  /*
  if(mouseIsPressed){
    ambientLight(150);
  }
    ambientLight(0);
    */
    // (r, g, b, alpha, x, y, z)
  directionalLight(255, 0, 0, 0, 0, -30, 0);
   directionalLight(255, 100, 0, 0, 0, 0, 3);
  
  sphere(80);

  translate(-50-50, -50-50, -100);
  rotateY(radians(45));
  box(50, 40);
  pop();
}