function Bird(){
  this.y = height/2;
  this.x = 64;
  
  this.gravity = .01; // force causing the velocity to increase. down
  //but better with other forces:
  this.lift = -15; // negative added so goes down
  this.velocity = 0;
  
  this.show = function(){
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }
  
  
  this.up = function(){
    this.velocity += this.lift
    this.velocity *= 0.9;  // air resistance limits speed. shrinking it a bit
    this.velocity += this.gravity * 10;
    
  }
  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;  // pushing bird down
  
    
    if(this.y > height){
      this.y = height;
      this.velocity = 0;
    }
    
    // also for the top
    if(this.y < 0){
      this.y = 0;
      this.velocity = 0;
    }
    
    
  }
}