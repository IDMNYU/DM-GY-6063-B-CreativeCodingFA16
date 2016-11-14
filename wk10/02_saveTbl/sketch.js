/**
 * Loading Tabular Data
 * by Daniel Shiffman.  
 * 
 * This example demonstrates how to use loadTable()
 * to retrieve data from a CSV file and make objects 
 * from that data.
 */

var bubbles;

var table;

function preload() {
  table = loadTable("data/data.csv", "header");
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

 
  for (var i = 0; i < table.getRowCount(); i++) {
    var row = table.getRow(i);
   
    var x = row.get("x");
    var y = row.get("y");
    var d = row.get("diameter");
    var n = row.get("name");

    bubbles[i] = new Bubble(x, y, d, n);
  }
}

// function mousePressed() {
//   // Create a new row
//   TableRow row = table.addRow();
//   // Set the values of that row
//   row.setFloat("x", mouseX);
//   row.setFloat("y", mouseY);
//   row.setFloat("diameter", random(40, 80));
//   row.setString("name", "Blah");

//   // If the table has more than 10 rows
//   if (table.getRowCount() > 10) {
//     // Delete the oldest row
//     table.removeRow(0);
//   }

//   // Writing the CSV back to the same file
//   saveTable(table, "data/data.csv");
//   // And reloading it
//   loadData();
// }

