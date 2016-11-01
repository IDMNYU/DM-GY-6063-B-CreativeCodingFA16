var thefont;

var phrase = "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, \'and what is the use of a book,\' thought Alice \'without pictures or conversations?\''"

var phrasearray = phrase.split(' ');

function preload() {
  thefont = loadFont('data/font3.otf');
}

function setup() {
  createCanvas(800, 600);
  background(255);
  noStroke();
  fill(0, 0, 0);
  text(thefont, 36);

}

function draw() {
  background(255);
  var margin = 20;
  var thex = margin;
  var they = 90; // one line down

  for (i in phrasearray) { // for(var i = 0; i< phrasearray.length; i++)
    if (phrasearray[i] == 'Alice') {
      textSize(90);
    } else {
      textSize(36);

    }
  // moving x and thinking about where we need to move it to
    var tw = textWidth(phrasearray[i] + ' ');
    if ((thex + tw) > (width - margin)) { // are we close to the edge??
      thex = margin;
      they += 36;
    }
    text(phrasearray[i], thex, they);
    thex += tw;

  }
}