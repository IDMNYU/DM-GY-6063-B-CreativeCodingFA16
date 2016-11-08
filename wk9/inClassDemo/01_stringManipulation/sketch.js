var rawTxt;
var joined;
var story;
var parsedTxt;

var delimiters  = " ,.!?:;";

var t;
var herd = [];

//http://www.w3schools.com/jsref/jsref_obj_string.asp

var beginNum, endNum;

function preload(){
  rawTxt = loadStrings("data/peterRabbit_text.txt");
}

function setup() {
  createCanvas(400, 400);
  background(255);
  joined = join(rawTxt, " "); // join all of the text into one String, leave a " " inbtwn
  beginNum = joined.indexOf("Once");
  //console.log(beginNum);
  endNum = joined.lastIndexOf("the end");
  //console.log(endNum);
  
  story = joined.substring(beginNum, endNum);
  //console.log(story);
  
  var me = story.replace("Peter", "Katherine");  // strings
  //console.log(me);
  var superParsed = story.replace(/Illustration/gi, " ");
  
  
  var rabbit = story.match(/and/gi); // regular expression... g is for global, and i means literally that text
  //console.log(rabbit.length); // rabbit is an array with all of the instances
  
  var dude = story.search(/McGregor/gi);
  //console.log(dude);
  
  parsedTxt = splitTokens(story, delimiters);
  console.log(parsedTxt);
  
  t = searchText("Katherine");
  if( t > 0){
    for(var i = 0; i <= t; i++){
      var b = new Bunny(random(0, width), random(0, height));
      herd.push(b);
    }
  }
  
}

function draw() {
  background(255);
  for(var i = 0; i < herd.length; i++){
    herd[i].display(color(random(255), random(255), random(255)) );
  }
  
  noLoop();
  
}

function searchText(word){
  var total;
  for(counter = 0; counter < parsedTxt.length; counter++){
    var n = parsedTxt[counter]; // pull out every indice
    if(n == word){
      total++
    }
  }
  return total;
}