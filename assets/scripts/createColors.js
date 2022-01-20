function createColors(colorUrl) {
   let slashIndex = colorUrl.lastIndexOf("/");
   let pallateString = colorUrl.slice(slashIndex + 1);
   let arr = pallateString.split("-");
   for (let i = 0; i < arr.length; i++) {
      arr[i] = "#" + arr[i];
   }
   return arr;
}

let colorUrl =
   "https://coolors.co/dcaaff-ffaaff-ffaadc-ffaaaa-ffdcaa-ffffaa-dcffaa-aaffaa-aaffdc-aaffff-aadcff-aaaaff";
colors = createColors(colorUrl);

// colors = [
//   '#dcaaff', '#ffaaff',
//   '#ffaadc', '#ffaaaa',
//   '#ffdcaa', '#ffffaa',
//   '#dcffaa', '#aaffaa',
//   '#aaffdc', '#aaffff',
//   '#aadcff', '#aaaaff'
// ]
console.log(`🌈 there are ${colors.length} colors. they are`, colors);
