/*jshint esversion: 6 */

// Reduce //

var numbers = [10, 20, 30];

// We get to asign an initial value to sum (0 in this case),
// and it gets applied to our calculations. Sum also stores
// the value from the previous iteration.
var total = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

console.log(total);


var primaryColors = [
  { color: "red" },
  { color: "yellow" },
  { color: "blue" },
];

var colors = primaryColors.reduce(function(accumulator, primaryColor) {
  accumulator.push(primaryColor.color);
  return accumulator;
}, []);

console.log(colors);


function balancedParens(string) {
  return !string.split("").reduce(function(accumulator, character) {
    if (accumulator < 0)   { return   accumulator; }
    if (character === "(") { return ++accumulator; }
    if (character === ")") { return --accumulator; }
    return accumulator;
  }, 0);
}

var ansewer = balancedParens(")()");

console.log(ansewer);


// Find unique numbers with reduce and filter
var numbers = [1, 1, 2, 3, 4, 4, 4, 4, 6];

function unique(array) {
  return array.reduce(function(accumulator, number) {
    if(!accumulator.find(function(item) { return item === number; })) {
      accumulator.push(number);
    }
    return accumulator;
  }, []);
}

var myNumbers = unique(numbers);

console.log(myNumbers);
