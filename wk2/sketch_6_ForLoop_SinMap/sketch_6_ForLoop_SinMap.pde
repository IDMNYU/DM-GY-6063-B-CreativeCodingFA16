/*
From the Processing Handbook by Ben Fry and Casey Reas, 2007
https://processing.org/handbook/
*/

size(700, 700);

for(float angle = 0; angle < TWO_PI; angle += PI/24.0){
  float newValue = map(sin(angle), -1, 1, 0, 1000);
  println(newValue);
  
}


noStroke();
fill(0);
float angle = 0.0;
for(int x = 0; x <= width; x += 5){
  float y = 50 + (sin(angle) * 35.0);
  rect(x, y, 2, 4);
  angle += PI/40.0;
}
  