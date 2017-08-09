/*jshint esversion: 6 */

// Some //
// Runs the || operator on returned values,
// and returns true if at lease one result is true

// true || true || false == true
// true || true || true == true

var computers = [
  { name: "Apple",  ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer",   ram: 32 },
];

var canSomeRunIt = computers.some(function(computer) {
  return computer.ram > 16;
});

console.log(canSomeRunIt);


var names = [
  "Alex",
  "Joe",
  "Matthew",
];

var someNamesGreater = names.some(function(name) {
  return name.length >  4;
});

console.log(someNamesGreater);
