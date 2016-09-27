// var says that I am going to have a variable
// there aren't any datatypes for variables in js
var grn, slate, ltgrn;
var step = 0;
var stepY;
var vel = 1;
var acc = .2;
var rand = 0;
var x;

function setup() {
  background(88, 170, 232);
  createCanvas(700, 400);
  noStroke();
  grn = color(51, 255, 142);
  slate = color(120, 216, 232);
  ltgrn = color(174, 255, 120);
  stepY = 0
}

function draw() {
   background(88, 170, 232);

  if (mouseIsPressed) {
    step += 5;
    //rand += random(0, 3) + 3;
    
    if (step > width) {
      step = -100;
      
    }
  }
   if (keyIsPressed) {
    //console.log("key is: ");
    //console.log(key);
    //console.log(keyCode); 
    if (key == 'w') {
     //step -= (acc+3);
     vel += acc;
     step += vel;
     //console.log(step);
     if(step > 700){
       step = -150;
       vel = 0;
     }
    }
    
   
    if( (key == 'a') || (key == 'A') || (key == 'Q') || (key == 'q')){
      stepY -= 2;
      //console.log(key);
      if(stepY < -180){
        stepY = 216;
      } // stepY limits
    } // key a or q
   
    
  }
  
  bump(50 + step, 130 + stepY, grn);   // funtion call
  bump(100 + step, 50, slate);
  bump(200, (150 + rand), ltgrn);
  
  var result = mathDemo(step, stepY);
  //console.log(result);
  if(result < -150){
    console.log(step);
    step = 0;
  }
 
  console.log(stepY);
}

function bump(locX,locY,clr) {
  var x = locX;
  var y = locY;
  noStroke();
  fill(clr);  //green
  ellipse(40 + x, 40 + y, 35, 35);
  fill(193, 154, 255); // purple
  stroke(229, 206, 76); // orange
  strokeWeight(1);
  ellipse(35 + x, 35 + y, 10, 10);
  ellipse(40 + x, 45 + y, 10, 10);
  noStroke();
  fill(241, 188, 255); // light purple
  ellipse(48 + x, 35 + y, 5, 5);
  //println(x);
  //println(y);
}

function mathDemo(valA, valB){
  var valC = valA + valB;
  return valC;
  
}

function mousePressed() {
  x+=5;
}