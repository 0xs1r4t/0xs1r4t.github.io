let skyBlue = '#CA638B'
let darkBlue = '#2A1E46'
var eyeWhite, eyeBall, eyeShine, ballAngle, shineAngle
let easing = 0.25
let myMeasure = 48

function setup() {
  createCanvas(myMeasure * 1.5, myMeasure * 1.5) // windowWidth, windowHeight

  // eyes
  eyeWhite = {
    x: width / 2,
    y: height / 2,
    w: myMeasure +  (myMeasure * 1/10),
    h: myMeasure
  }
  
  eyeBall = {
    x: width / 2,
    y: height / 2,
    w: myMeasure * 0.3,
    h: myMeasure * 0.6
  }
  
  eyeShine = {
    x: (width / 2) - (myMeasure * 7/40),
    y: (height / 2) - (myMeasure * 7/40),
    w: myMeasure * 0.25,
    h: myMeasure * 0.1
  }
  
  // font
  textFont('Space Mono');
  textSize(30)
  textAlign(CENTER, CENTER)
  
  noLoop()
}

function draw() {
  // background
  background(skyBlue);
  smooth()

  // fill(darkBlue)
  // text('eye can see', width/2, 30)
  // smooth()
}

function mouseMoved() {
  // eye white
  fill(255)
  noStroke()
  smooth()
  ellipse(eyeWhite.x, eyeWhite.y, eyeWhite.w, eyeWhite.h)
  smooth()

  // angle
  angle = atan2(mouseY - eyeBall.y, mouseX - eyeBall.x)
  
  // eye ball
  fill(darkBlue)
  noStroke()
  smooth()
  // ellipse(eyeBall.x, eyeBall.y, eyeBall.w, eyeBall.h)
  ellipse((eyeBall.x + (eyeBall.w / 1.5) * cos(angle) * easing), 
          (eyeBall.y + (eyeBall.y / 4) * sin(angle) * easing), 
          eyeBall.w, 
          eyeBall.h)

  // eye shine
  fill(255)
  smooth()
  noStroke()
  ellipse((eyeShine.x + (eyeShine.w / 1.5) * cos(angle) * easing), 
          (eyeShine.y + (eyeShine.y / 4) * sin(angle) * easing), 
          eyeShine.w, 
          eyeShine.h)
}