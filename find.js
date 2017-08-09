/*jshint esversion: 6 */

// Find //
// Search through array and look for
// a perticular element. Only returns the
// FIRST true element

var users = [
  {name: "Alex"},
  {name: "Matti"},
  {name: "Bill"},
];

var user = users.find(function(user) {
  return user.name === "Alex";
});

console.log(user);

function Car(model) {
  this.model = model;
}

var cars = [
  new Car("Volvo"),
  new Car("Toyota"),
  new Car("Ford"),
];

var car = cars.find(function(car) {
  return car.model === "Volvo";
});

console.log(car);

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria) {
  var proptery = Object.keys(criteria);
  return array.find(function(item) {
     return item[proptery] === criteria[proptery];
  });
}

var products = findWhere(ladders, { height: 20 });

console.log(products);
