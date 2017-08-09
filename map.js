/*jshint esversion: 6 */

// Map //
// Each item eventually gets returned to a new array

var numbers = [1,2,3,4,5,6,7,8,9,10];
var cars = [
  {model:"Volvo",  price: 100},
  {model:"Toyota", price: 1000},
  {model:"Mese",   price: 1000},
];

var doubled = numbers.map(function(number) {
  return number * 2;
});

console.log(doubled);

var prices = cars.map(function(car) {
  return car.price;
});

console.log(prices);

function pluck(array, property) {
  return array.map(function(paint) {
    return paint[property];
  });
}

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
var colors = pluck(paints, 'color');

console.log(colors);
