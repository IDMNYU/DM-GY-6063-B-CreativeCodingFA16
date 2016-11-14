
var stuff, data;

function preload() {
 
  stuff = loadStrings("data/data.txt");
}

function setup() { 
  createCanvas(480, 270);
 
  data = int(split(stuff[0], ',' ));
}

function draw() {
  background(255);
  stroke(0);

  for (var i = 0; i < data.length; i++) {
  
    fill(data[i]); 
    rect(i*64, 0, 20, data[i]);
  }
}

