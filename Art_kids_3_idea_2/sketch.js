function setup() {
  createCanvas(600, 600);
  rectMode(CENTER)

  // Max distance is across the diagonal
  diagonal = dist(0, 0, width, height)

  // Compute coordinates of the centre of the canvas
  centreX = width / 2
  centreY = height / 2
}

function draw() {
  background(0);

  // Use solids
  noStroke()
  fill("white")

  // Use lines instead of fills
  //stroke("white")
  //noFill()

  // Fix the random seed to stop constant wobble
  randomSeed(10)

  // Set spacing of shapes
  spacingX = width / 20
  spacingY = width / 20

  // Draw a grid of shapes
  for (x = 0; x <= width; x += spacingX) {
    for (y = 0; y <= height; y += spacingY) {

      // How far is mouse from the shape and the centre?
      mouseToShape = dist(x, y, mouseX, mouseY)
      mouseToCentre = dist(centreX, centreY, mouseX, mouseY)

      // Distance to corners of canvas
      mouseToTopLeft = dist(0, 0, mouseX, mouseY)
      mouseToBottomRight = dist(width, height, mouseX, mouseY)
      mouseToTopRight = dist(width, 0, mouseX, mouseY)
      mouseToBottomLeft = dist(0, height, mouseX, mouseY)

      // Compute size of the shape
      size = map(mouseToShape, 0, diagonal, 20, 5)

      // No wobble
      wobble = 0

      // Random max wobble
      maxWobble = random(0, 20)

      // Wobble depends on distance from centre
      //wobble = map(mouseToCentre, 0, diagonal/2, 0, maxWobble)

      // Wobble depends on distance from mouse, more wobble the further away from the mouse
      //wobble = map(mouseToShape, 0, diagonal/2, 0, maxWobble)

      // Wobble depends on distance from mouse, more wobble the nearer to the mouse 
      wobble = map(mouseToShape, 0, diagonal / 2, maxWobble, 0)

      // Rotated wobble
      //fill("white")
      //rotateRect(x, y, size, size, wobble)

      // Fill colour according to distance to corners of canvas
      redIntensity = map(mouseToTopRight, 0, diagonal, 0, 255)
      greenIntensity = map(mouseToTopLeft, 0, diagonal, 0, 255)
      blueIntensity = map(mouseToBottomRight, 0, diagonal, 0, 255)
      fill(redIntensity, greenIntensity, blueIntensity)


      rect(x + wobble, y + wobble, size, size)


    }
  }
}

function rotateRect(x, y, w, h, rot) {
  push()
  translate(x, y)
  rotate(rot)
  rect(0, 0, w, h)
  pop()
}

function rotateText(t, x, y, size, rot) {
  push()
  translate(x, y)
  rotate(rot)
  textSize(size)
  text(t, 0, 0)
  pop()
}