var myColor = "#faf";

function setup() {
   cnv = createCanvas(windowWidth, windowHeight);
   cnv.parent("cnv");
   cnv.position(0, 0);
   cnv.style("z-index", "-1");

   let colorUrl =
      "https://coolors.co/dcaaff-ffaaff-ffaadc-ffaaaa-ffdcaa-ffffaa-dcffaa-aaffaa-aaffdc-aaffff-aadcff-aaaaff";
   colors = createColors(colorUrl);

   console.log(
      "🌸 hey there! ✨( ・_・)ノ✨🌸",
      "\n🌼🌻🌷🌻🌼🌷🌼🌻🌷🌻🌼🌷",
      "\nto find out more about me,",
      "\nvisit my website ➡️ sirat.xyz",
      "\nor my github ➡️ @0xS1R4T 🦄🦄",
   );
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}

function createColors(colorUrl) {
   let slashIndex = colorUrl.lastIndexOf("/");
   let pallateString = colorUrl.slice(slashIndex + 1);
   let arr = pallateString.split("-");
   for (let i = 0; i < arr.length; i++) {
      arr[i] = "#" + arr[i];
   }
   return arr;
}

function keyPressed() {
   myColor = random(colors);
}

function mouseDragged() {
   strokeWeight(20);
   stroke(myColor);

   line(pmouseX, pmouseY, mouseX, mouseY);
}

function draw() {}
