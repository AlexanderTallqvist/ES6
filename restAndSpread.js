/*jshint esversion: 6 */

// The rest operator lets us capture an undefined
// amount of arguments, and place them into an array
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbers(1,2,3,4,5,6,7));


const defaultColors = ["red", "green"];
const userFavorites = ["orange", "yellow"];

// The spread operator "flattens" the array,
// and lets us merge the two arrays together
const allColors = [ ...defaultColors, ...userFavorites, "brown" ];
console.log(allColors);


function validateShoppingList(...items) {
  if(items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }
  return items;
}

console.log(validateShoppingList("oranges", "bread"));



const MathLibrary = {
  calculateProduct(...args) {
    console.log("Pleace use the multiply method instead");
    return this.multiply(...args);
  },
  multiply(a, b) {
    return a * b;
  }
};

console.log(MathLibrary.calculateProduct(2,2));
