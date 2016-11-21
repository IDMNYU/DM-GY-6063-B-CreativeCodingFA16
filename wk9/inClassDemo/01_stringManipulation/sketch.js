var rawTxt; //
var joined; //
var txtArray;
var parsedStory; //
var story; //
var t; //
var herd = []; //

delimiters = "  ,.!?:;"; //

var beginNum, endNum; //

function preload() {
  rawTxt = loadStrings("data/peterRabbit_text.txt");
}

function setup() {
  createCanvas(400, 400);
  background(255);
  //txtArray = split(rawTxt[0], " ");
  joined = join(rawTxt, " "); // join all of the txt into one String, 
  // leave " " inbetween
  beginNum = joined.indexOf("Once");
  // console.log(beginNum);
  var end = "THE END"
  endNum = joined.indexOf(end);
  // console.log(endNum);

  story = joined.substring(beginNum, endNum + end.length);
  //console.log(story);


  var rabbit = story.match(/and/gi); // takes regular expression and matches it.
                                //puts each into an array object
                                // retrieve the matches
                                // .test to see if in there, boolean return
  console.log(rabbit.length);
  var num = story.search(/McGregor/gi); // returns the positin of the first instance
  console.log(num); // position number

  var me = story.replace("Peter", "Katherine");
  var cleaner = me.replace(/Illustration/g, ''); // take the string and take out this work
  console.log(me);
  console.log(cleaner);
  //var wds = "[Illustration]";
  //var superParsed = story.replace(wds, " ");
  //var superParsed = story.replace(/Illustration/gi, " ");  // g means globally, i, means literally as it's written
  var superParsed = cleaner.replace(/[\[\]]/gi, " "); // take out the []
  console.log(superParsed);
  parsedStory = splitTokens(superParsed, delimiters); // turns a string into an array based on delimiters
  console.log(parsedStory);

  //parsedStory = splitTokens(story, delimiters); // turns a string into an array based on delimiters
  //console.log(parsedStory);  // after removing the word Illustration and the [], we still have strings [Illustration] (we could just take the "i" out of the replace method above)

  // check this out later
  //var tidyArray = removeStuff("[Illustration]", parsedStory); //send that string of char that need to be removed to a function, as well as the array to parse
  //console.log(tidyArray);

  t = searchText("Peter");
  //console.log(t);
  if (t > 0) {
    for (var i = 0; i <= t; i++) {
      var b = new Bunny(random(0, width), random(0, height))
      herd.push(b);

    }
  }
  //console.log(herd.length);
}

function draw() {
  for (var i = 0; i < herd.length; i++) {
    herd[i].display(color(random(255), random(255), random(255)));
  }
  noLoop();
}

function removeStuff(strng, storyList) {
  for (counter = (storyList.length - 1); counter > 0; counter--) {
    if (storyList[counter] == strng) {
      storyList.splice(counter, 1);
    }
  }
  return parsedStory;
}

function searchText(word) {

  var total = 0;
  for (counter = 0; counter < parsedStory.length; counter++) {
    var t = parsedStory[counter];
    if (t == word) {
      total++;
    }
  }
  //console.log(total);
  return total;
  /*
  var word = "once"
  //for(var i = 0; i < parsedStory.length; i++){
    countArray = parsedStory.match(/word/gi);
  //}
  */

}