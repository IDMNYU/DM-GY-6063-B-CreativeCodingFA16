// Learning Processing
// Daniel Shiffman


var timer;
var time = "";


var loading = true;

function setup() {
  createCanvas(200, 200);
 
  loadJSON('http://time.jsontest.com/', gotData);
  timer = new Timer(1000);
  timer.start();
}

function draw() {
  background(255);
 
  if (timer.isFinished()) {
    
    loadJSON('http://time.jsontest.com/', gotData);
    loading = true;
    println("Making request!");
    timer.start();
  }

  fill(0);
  noStroke();
  text(time, 40, 100);

  translate(20, 100);
  stroke(0);
 
  if (loading) {
    rotate(frameCount*0.04);
  }
  for (var i = 0; i < 10; i++) {
    rotate(radians(36));
    line(5, 0, 10, 0);
  }
}


function gotData(json) {
 
  setTimeout(function() {
    time = json.time;
    loading = false;
    println("Request completed!");
  }, 500);
}
