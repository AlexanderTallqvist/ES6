/*jshint esversion: 6 */

const add = function(a, b) {
  return a + b;
};

const remove = (a, b) => {
  return a - b;
};

// In case we only have one expression in our function
const multiply = (a, b) => a * b;

// In cases that we only have one argument
const double = number => number * 2;

let sum = add(10, 30);
console.log(sum);

sum = remove(sum, 30);
console.log(sum);

let doubled = double(30);
console.log(doubled);


const number = [1,2,3];

let newNumbers = number.map(number => 2 * number);

// The same as

newNumbers = number.map(function(number) {
  return number * 2;
});

console.log(newNumbers);

const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    }.bind(this));
  }
};

console.log(team.teamSummary());

const team2 = {
  members: ["Jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function() {
    // this === team when using fat-arrow functions
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

console.log(team2.teamSummary());


// Before...
// In ES5, `bind()` or var that = this; are necessary as functions
// create their own `this`. We need to store the parent `this` in
// a variable that can be referenced in the callback or take care
// of binding ourselves.
function CounterES5() {
  this.seconds = 0;
  window.setInterval(function() {
    this.seconds++;
  }.bind(this), 1000); // or }.bind(this), 1000) and skip that = this
}

var counterA = new CounterES5();
window.setTimeout(function() {
  console.log(counterA.seconds);
}, 1200);

// After...
// ES6 Arrows instead bind `this` to the immediate enclosing
// lexical scope:
function CounterES6() {
  this.seconds = 0;
  window.setInterval(() => this.seconds++, 1000);
}

let counterB = new CounterES6();
window.setTimeout(() => console.log(counterB.seconds), 1200);


// More examples of how to use fat-arrow functions


var calculate = {
  array: [1, 2, 3],
  sum: () => {
    console.log(this === window); // => true
    return this.array.reduce((result, item) => result + item);
  }
};
console.log(this === window); // => true
// Throws "TypeError: Cannot read property 'reduce' of undefined"
calculate.sum();


var calculate = {
  array: [1, 2, 3],
  sum() {
    console.log(this === calculate); // => true
    return this.array.reduce((result, item) => result + item);
  }
};
calculate.sum(); // => 6
