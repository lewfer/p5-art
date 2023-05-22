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
  noStroke()
  fill("white")
  
  // Fixed size
  let size = 100

  spacingX = width / 4
  spacingY = width / 4  
  
  // 3 circles, evenly spaced
  /*
  circle(spacingX,spacingY, size)
  circle(spacingX,spacingY*2, size)
  circle(spacingX,spacingY*3, size)
  */
  
  
  // 9 circles, evenly spaced
  /*
  circle(spacingX,spacingY, size)
  circle(spacingX,spacingY*2, size)
  circle(spacingX,spacingY*3, size)
  circle(spacingX*2,spacingY, size)
  circle(spacingX*2,spacingY*2, size)
  circle(spacingX*2,spacingY*3, size)
  circle(spacingX*3,spacingY, size)
  circle(spacingX*3,spacingY*2, size)
  circle(spacingX*3,spacingY*3, size)
  */


  // 9 circles, evenly spaced (using loops)
  /*
  for (x=spacingX; x<width; x += spacingX) {
    for (y=spacingY; y<height; y += spacingY) {
      circle(x, y, size)
    }    
  }
  */
  
  // Make our circles go to the edges
  /*
  for (x=0; x<=width; x += spacingX) {
    for (y=0; y<=height; y += spacingY) {
      circle(x, y, size)
    }    
  }
  */


  // Make our circles change size depending on how far mouse is away from each one
  /*
  for (x=0; x<=width; x += spacingX) {
    for (y=0; y<=height; y += spacingY) {
      mouseToCircle = dist(x, y, mouseX, mouseY)
      size = map(mouseToCircle, 0, diagonal, 0, 100)      
      circle(x, y, size)
    }    
  }
  */
  
  
  // Reduce spacing so we get more circles
  spacingX = width / 20
  spacingY = width / 20
  
  
  for (x=0; x<=width; x += spacingX) {
    for (y=0; y<=height; y += spacingY) {
      mouseToCircle = dist(x, y, mouseX, mouseY)
      size = map(mouseToCircle, 0, diagonal, 0, 100)
      circle(x, y, size)
    }    
  }  
}