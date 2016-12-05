function setup(){
  createCanvas(100, 100, WEBGL);
}
function draw(){
 //move the camera away from the plane by a sin wave
 camera(0, 0, sin(frameCount * 0.01) * 100);
 plane(120, 120);
 
}