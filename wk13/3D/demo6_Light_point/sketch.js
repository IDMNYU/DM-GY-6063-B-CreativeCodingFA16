/*
 A point light is a spotlight with a 180 degree cone.
 To create a point light, you only need an RGB color
 and a position.
*/

function setup(){
  createCanvas(100, 100, WEBGL);
}
function draw(){
  background(0);
  //move your mouse to change light position
  var locY = (mouseY / height - 0.5) *(-2);
  var locX = (mouseX / width - 0.5) *2;
  //to set the light position,
  //think of the world's coordinate as:
  // -1,1 -------- 1,1
  //   |            |
  //   |            |
  //   |            |
  // -1,-1---------1,-1
  //(r, g, b, opacity, x, y, z);
  pointLight(250, 250, 250, locX, locY, 0);
  ambientMaterial(250);
  sphere(50);
}