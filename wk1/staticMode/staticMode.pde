
// this is a one line comment
size(400, 400);

// background(r, g, b);  range from 0 - 255
background(60, 207, 232);
//background(255, 0, 0);


stroke(88, 72, 255);  // controls the color of the line
strokeWeight(3);  //how thick the line is
// line(x1, y1, x2, y2);
line(0, 0, 400, 400);


fill(232, 229, 108);
noStroke(); // no line on the ellipse
ellipse(width/2, height/2, 40, 40);

// rect(
//rect(100 * 2, 130, 60, 80);

fill(255); // one value 0-255 btwn black - white
//fill(229, 156, 38, 130); // 4th parameters is alpha
rectMode(CORNERS);  // 3rd & 4th parameters are the opposite crnr
rect(100 * 3, 130, 60, 180);

rectMode(CORNER);
rect(100 * 2, 130, 60, 80);