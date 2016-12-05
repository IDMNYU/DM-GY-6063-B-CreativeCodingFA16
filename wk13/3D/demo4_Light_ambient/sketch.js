/*
 * ambientLight() -- Ambient light doesn't come from a 
 specific direction, the rays of light have bounced around
 so much that objects are evenly lit from all sides.
 Ambient lights are almost always used in combination 
 with other types of lights. An ambient light is specified
 with an RGB color and, optionally, an xyz location for 
 the light. 
 */

function setup() {
  createCanvas(710, 400, WEBGL);
}


function draw() {

  push();
  translate(50, 50, 100);

  if (mouseIsPressed) {
    ambientLight(150, 0, 0);
  }
  ambientLight(0);


  sphere(80);

  translate(-50 - 50, -50 - 50, -100);
  rotateY(radians(45));
  box(50, 40);
  pop();
}