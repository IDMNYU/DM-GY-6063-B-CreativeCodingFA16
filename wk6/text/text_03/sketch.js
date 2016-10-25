var thefont = new Array(4);
var fsize = 9;
var insideColor = 0;
var fontCount = 0;


function preload() {

  //thefont = loadFont('data/font1.otf');
  for (var i = 0; i < thefont.length; i++) {
    thefont[i] = loadFont('data/font' + i + '.otf'); // concatenating the name of the file
  }
}

function setup() {
  createCanvas(800, 600);
  background(255);
  fill(0);
  stroke(0);
  textFont(thefont[0], fsize); // which font and the size

}

function draw() {
  background(255);
  var thex = 50; 
  var they = height/2;
  textFont(thefont[0], 36);
  text('my', thex, they);
  thex += textWidth('my ');
  
  textFont(thefont[1], 36);
  text('cat' ,thex, they);
  thex += textWidth('cat ');
  
  textFont(thefont[2], 36);
  text('has' ,thex, they);
  thex += textWidth('has '); // with regard to the text you just drew
  
  textFont(thefont[3], 36);
  text('ticks' ,thex, they);
  thex += textWidth('ticks ');// totally optional
  
 
  /*
  fill(insideColor, 0, 0);
  text('my cat has ticks', mouseX, mouseY);
  fsize++;
  textSize(fsize);

  if (fsize > 56) fsize = 9;

  if (frameCount % 20 === 0) { // new in p5 --> 3x= when comparing to zero
    insideColor = 255 - insideColor;
    fontCount = (fontCount + 1) % thefont.length;
    textFont(thefont[fontCount]);
  }
  
  */
}