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
  
  // Compute distance from mouse to centre
  //let mouseToCentre = dist(centreX, centreY, mouseX, mouseY)
  
  // Fix a size
  let size = 100
  
  // Gets bigger as we move away from centre
  //size = mouseToCentre 

  // Gets a much bigger as we move away from centre 
  //size = mouseToCentre * 10
  
  // Gets a little bigger as we move away from centre 
  //size = mouseToCentre / 10
  
  // Gets bigger as we move towards the centre
  //size = 1000/mouseToCentre 
  
  // Gets much bigger as we move towards the centre
  //size = 10000/mouseToCentre 
  
  // To make things easier and more controllable
  //size = map(mouseToCentre, 0, diagonal/2, 0, 600)
  //size = map(mouseToCentre, 0, diagonal/2, 600, 0)
  //size = map(mouseToCentre, 0, diagonal/2, 100, 20)

  // Draw a circle
  noStroke()
  fill("white")
  circle(centreX,centreY, size)
}

