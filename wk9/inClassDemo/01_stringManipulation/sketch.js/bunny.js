function Bunny(x, y){
  this.x = x;
  this.y = y;
  this.diameter = 30;
  //this.name = p;
  this.over = false;
  
  this.display = function(c){
    stroke(0);
    strokeWeight(3);
    fill(c);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    /*
    if (this.over) {
      textAlign(CENTER);
      noStroke();
      fill(0);
      text(this.name, this.x, this.y + this.diameter / 2 + 20);

    }
  */
   this.rollover = function(px, py) {
      var d = dist(px, py, this.x, this.y);
      if (d < diameter / 2) {
        this.over = true;
      } else {
        this.over = false;
      }
    }
  }
  
  
  
  
}