// Learning Processing
// Daniel Shiffman


var name = "Mary Poppins";
var runningtime;
var poster;

var lines;

function preload() {
  lines = loadStrings('data/poppins.html');
}

function setup() {
  createCanvas(300, 350);
  loadData();
}

function draw() {
  background(255);

  
  image(poster, 10, 10, 164, 250);
  fill(0);
  text(name, 10, 300);
  text(runningtime, 10, 320);
}


function loadData() {
  
  var html = join(lines, ""); 

  
  var start = "<time itemprop=\"duration\" datetime=\"PT139M\">";
  var end = "</time>";
  runningtime = giveMeTextBetween(html, start, end).trim();

  
  start = "<link rel='image_src' href=\"";
  end = "\">";
  var imgUrl = giveMeTextBetween(html, start, end);
  poster = loadImage(imgUrl);
}

