function setup() {
  createCanvas(600, 600);
  
  // Max distance is across the diagonal
  diagonal = dist(0,0,width,height)
  
  // Compute coordinates of the centre of the canvas
  centreX = width/2
  centreY = height/2
}

function draw() {
  background("black");

  // Set our circle style
  noStroke()
  fill("white")
  
  // Set spacing for the circles
  spacingX = width / 20
  spacingY = width / 20
  
  // Draw a grid of circles
  for (x=0; x<=width; x += spacingX) {
    for (y=0; y<=height; y += spacingY) {
      mouseToShape = dist(x, y, mouseX, mouseY)
      size = map(mouseToShape, 0, diagonal, 0, 100)
      circle(x, y, size)
    }    
  }  
}

