var thefont; 
var fsize = 9;
var insideColor = 0;

// special function that loads first before out sketch
// put things there that are....um heavy lifters. ie things we don't want
// the rest of our sketch to get held up by
// asychronous function
function preload(){
  
  thefont = loadFont('data/font1.otf');
  
}

function setup() {
  
  createCanvas(800, 600);
  background(255);
  fill(0);
  stroke(0);
  textFont(thefont, fsize);  // which font and the size
  
}

function draw() {
  background(255);
  fill(0); // fill color of the text
  // 4 parameters forms a box, with the latter two being the coordinates of the lower crnr
  text('who jackhammers at 3 am????', 10, height/2, 50, height/2+50); 
  //text('what the hell?', 10, 200);
  fill(insideColor, 0, 0);
  text('what the hell?', mouseX, mouseY);
  fsize++;
  textSize(50);
  if(fsize > 56) fsize= 9;
  
  
  if(frameCount% 20 === 0){  // new in p5 --> 3x= when comparing to zero
    insideColor = 255 - insideColor;
 
  }
}