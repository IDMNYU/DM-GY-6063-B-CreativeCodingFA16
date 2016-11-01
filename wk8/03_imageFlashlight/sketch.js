var img;

function preload(){
  img = loadImage("data/bird.png");
}

function setup() {
  createCanvas(256, 256);
  
}

function draw() {
  loadPixels();  // loads the pixels of the canvas
  img.loadPixels(); // this loads all of the pixels in the image, in an array....called pixels.!!!
  
  for(var y = 0; y < height; y++) {
    for(var x = 0; x < width; x++){
      // here we are going over the image's pixels
      var pix = (x + y * width) * 4;  // pulling out one pixel at a time to work with
      var r = img.pixels[pix  ];  // then pulling out the red value
      var g = img.pixels[pix + 1]; // green value
      var b = img.pixels[pix + 2]; // blue value
      
      var distance = dist(x, y, mouseX, mouseY); 
      // manipulate that information
      var adjustBright = map(distance, 0, 50, 8, 0);
      
      r *= adjustBright;
      g *= adjustBright;
      b *= adjustBright;
      // here we are putting them in the canvas's pixels
      pixels[pix   ] = r;
      pixels[pix + 1] = g;
      pixels[pix +2 ] = b;
      pixels[pix + 3] = 255
      
    }
  }
  //update those bad turkies
  updatePixels(); // the entire canvas
  
  
  
}