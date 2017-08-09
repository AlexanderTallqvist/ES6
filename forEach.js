/*jshint esversion: 6 */

// ForEach //
// Loop through an array

var colors  = ["red", "blue", "green"];
var numbers = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;

colors.forEach(function(color) {
  console.log(color);
});

// We can also use a custom function
numbers.forEach(addNumbers);

function addNumbers(number) {
  sum += number;
}

console.log(sum);
