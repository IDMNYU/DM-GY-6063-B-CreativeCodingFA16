// example OOP
// make several objects and load them in an array
// talk about movement

// these will be my initial objects of the class
var clust1;
var clust2;
var c1, c2;
var collection = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  c1 = color(87, 199, 232);
  c2 = color(168, 116, 229); // purple

  clust1 = new Cluster(1, c1, 60, 80);
  //clust1.update();
  clust1.display(0, 0);

  clust2 = new Cluster(3, c2, 100, 200); // purple
  //clust2.update();
  clust2.display(0, 0);

}

function draw() {
  background(255);
  clust1.update();
  clust1.display(0, 0);

  clust2.update();
  clust2.display(30, 50);
  
  // now we need run and to display our array
  for(var i = 0; i < collection.length; i++){
    collection[i].update();
    collection[i].display(0, 0);
  }

}

function mousePressed(){
  var newbie = new Cluster(random(1, 4), c2, random(30, 100), random(100, 30));
  collection.push(newbie);
}