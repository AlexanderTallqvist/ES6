/*jshint esversion: 6 */

// Every //
// Runs the && operator on returned values,
// and returns either true or false

// true && true && false == false
// true && true && true == true

var computers = [
  { name: "Apple",  ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer",   ram: 32 },
];

var canTheyRunIt = computers.every(function(computer) {
  return computer.ram > 16;
});

console.log(canTheyRunIt);


var names = [
  "Alex",
  "Joe",
  "Matthew",
];

var allNamesGreater = names.every(function(name) {
  return name.length >  4;
});

console.log(allNamesGreater);


function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
};

var username = new Field("cool");
var password = new Field("");
var fields = [username, password];

var formIsValid = fields.every(function(field) {
  return field.validate();
});

console.log(formIsValid);
