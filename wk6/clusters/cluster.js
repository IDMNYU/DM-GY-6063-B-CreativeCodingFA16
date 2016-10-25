
function Cluster(n, c, x, y) {
  this.num = n;
  this.colour = c;
  this.xPos = x;
  this.yPos = y;
  this.w = 20;
  this.acceleration = random(1)/5;
  this.velocity = random(1, 4);
  this.a = random(0, TWO_PI);


  
  this.update = function(){
    //this.velocity = this.velocity + this.acceleration;
    //this.xPos += this.velocity;
    
    this.xPos = this.xPos + this.velocity * cos(this.a);
    this.yPos = this.yPos + this.velocity * sin(this.a);

  }
  
  this.wobble = function(){
    this.xPos += random(-1, 1);
    this.yPos += random(-1, 1);
  }
  
  this.checker = function(){
    // check if near sides
    // if so invert + slow down - use sin to get it to be cyclical
    
    if(this.xPos > width){
      //this.xPos = 0;
      //this.acceleration = this.acceleration * -1;
      this.a = PI - this.a;
    }
    if(this.xPos< 0){
      //this.xPos = 0;
      //this.acceleration *= 1;
      this.a = PI - this.a;
    }
    if(this.yPos > height){
      this.a = TWO_PI - this.a;
    }
    if(this.yPos  < 0){
      this.a = TWO_PI = this.a;
    }
  }

  this.display = function(tranX, tranY) {
    noStroke();
    fill(this.colour, random(150, 200));
    //var tx = this.num + this.num*50; 
    for (var i = 0; i < this.num; i++) {
      push();
        translate(tranX + random(20, 50), tranY + random(20, 50));
        ellipse(this.xPos, this.yPos, this.w, this.w);
        ellipse(this.xPos + this.w/2, this.yPos + this.w/2, this.w, this.w);
        ellipse(this.xPos + this.w/2, this.yPos - this.w/2, this.w, this.w);
      pop();
    } // for
  } // display
} // class cluster