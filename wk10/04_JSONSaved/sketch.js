/**
 * Loading JSON Data
 * by Daniel Shiffman.  

 */

var bubbles;

var json;

function preload() {
  json = loadJSON("data/data.json");
}

function setup() {
  createCanvas(480, 270);
  loadData();
}

function draw() {
  background(255);
 
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].rollover(mouseX, mouseY);
  }

}

function loadData() {
  
  bubbles = []; 

 
  for (var i = 0; i < json.bubbles.length; i++) {
    var bubble = json.bubbles[i];
   
    bubbles[i] = new Bubble(bubble.position.x, bubble.position.y, bubble.diameter, bubble.label);
  }
}





//  function mousePressed() {
//   // Create a new JSON bubble object
//   JSONObject newBubble = new JSONObject();

//   // Create a new JSON position object
//   JSONObject position = new JSONObject();
//   position.setInt("x", mouseX);
//   position.setInt("y", mouseY);

//   // Add position to bubble
//   newBubble.setJSONObject("position", position);

//   // Add diamater and label to bubble
//   newBubble.setFloat("diameter", random(40, 80));
//   newBubble.setString("label", "New label");

//   // Append the new JSON bubble object to the array
//   JSONArray bubbleData = json.getJSONArray("bubbles");
//   bubbleData.append(newBubble);

//   if (bubbleData.createCanvas() > 10) {
//     bubbleData.remove(0);
//   }

//   // Save new data
//   saveJSONObject(json,"data/data.json");
//   loadData();
// }
