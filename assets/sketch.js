var x, y, points, target, leader, angle, i, distance, velocity;
var value = 300,
   back = 120,
   ease = 0.5,
   easing = true,
   num = 80,
   frames = 700,
   count = 0;
var deg = []; // degrees

function setup() {
   cnv = createCanvas(windowWidth, windowHeight);
   cnv.id("mycanvas");
   addDegrees(); // add degrees 0 - 360 in deg
   cnv.mouseClicked(chooseRandColor);
   colorMode(HSB, 360, 100, 100);
   points = new p5.Vector([num]);

   for (i = 0; i < num; i++) {
      points[i] = new p5.Vector(width / 2, height / 2);
   }
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}

function addDegrees() {
   for (i = 0; i <= 360; i += 30) {
      deg.push(i);
   }
   // console.log(deg);
}

function chooseRandColor() {
   value = random(deg);

   if (value >= 0 && value <= 180) {
      back = value + 180;
   } else if (value > 180 && value <= 360) {
      back = value - 180;
   }

   // console.log(`value = ${value}, background = ${back}`);
}

function draw() {
   background(back, 25, 100);
   noStroke();
   x = mouseX;
   y = mouseY;

   target = new p5.Vector(x, y);
   leader = new p5.Vector(target.x, target.y);

   for (i = 0; i < num; i++) {
      fill(value, ((i + 5) * 2) / 3, 85);
      var point = points[i];
      distance = p5.Vector.sub(leader, point);
      velocity = p5.Vector.mult(distance, ease);
      point.add(velocity);
      ellipse(point.x, point.y, 200, 200);
      leader = point;
   }
}

console.log(
   "🌸 hey there! ✨( ・_・)ノ✨🌸",
   "\n🌼🌻🌷🌻🌼🌷🌼🌻🌷🌻🌼🌷",
   "\nto find out more about me,",
   "\nvisit my website ➡️ sirat.xyz",
   "\nor my github ➡️ @0xS1R4T 🦄🦄",
);
