var thefont = new Array(4);
var fsize = 9;
var insideColor = 0;
var fontCount = 0;


function preload(){
  
  //thefont = loadFont('data/font1.otf');
  for(var i = 0; i < thefont.length; i++) {
   thefont[i] = loadFont('data/font' + i+ '.otf');
  }
}

function setup() {
  createCanvas(800, 600);
  background(255);
  fill(0);
  stroke(0);
  textFont(thefont[0], fsize);  // which font and the size
  
}

function draw() {
  background(255);
  fill(insideColor, 0, 0);
  text('my cat has ticks', mouseX, mouseY);
  fsize++;
  textSize(fsize);
  
   if(fsize > 56) fsize= 9;
  
  if(frameCount% 20 === 0){  // new in p5 --> 3x= when comparing to zero
    insideColor = 255 - insideColor;
    fontCount = (fontCount+1) % thefont.length;
    textFont(thefont[fontCount]);
  }
}