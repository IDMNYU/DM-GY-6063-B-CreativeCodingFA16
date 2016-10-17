// traditional. similiar to Processing
function Cluster(n, c, x, y) {
  this.num = n;
  this.colour = c;
  this.xPos = x;
  this.yPos = y;
  this.w = 20;
  this.acceleration = random(1)/2;  // rate of change of movement
  this.velocity = random(-1, 1); // rate movement

  this.update = function() {
    this.velocity = this.velocity + this.acceleration;
    this.xPos += this.velocity;
    
    

    } // 
    
   this.checker = function(){
    // check if near sides
    // if so invert + slow down - use sin to get it to be cyclical
  }


  // this is a method of Cluster
  this.display = function(tranX, tranY) {
      noStroke();
      fill(this.colour, random(80, 100));

      for (var i = 0; i < this.num; i++) {
        push();
            translate(tranX + random(20, 50), tranY + random(20, 50));
            ellipse(this.xPos, this.yPos, this.w, this.w);
            ellipse(this.xPos + this.w / 2, this.yPos + this.w / 2, this.w, this.w);
            ellipse(this.xPos + this.w / 2, this.yPos - this.w / 2, this.w, this.w);
        pop();
      } // for loop

    } // display


} // class closer