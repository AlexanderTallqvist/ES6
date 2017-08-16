/*jshint esversion: 6 */

// Classes

//ES5
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return "Wroom";
};

function Toyota(options) {
  // Get the property options from Car
  Car.call(this, options);
  this.color = options.color;
}

// Get the methods from Car
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.construct = Toyota;

// Setup own method
Toyota.prototype.honk = function() {
  return "Tööt";
};

const car = new Car({title: "Focus"});
const toyota = new Toyota({color: "red", title: "Daily driver"});

console.log(toyota.drive());
console.log(toyota.honk());


// ES6
class Car6 {

  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return "Wroom6";
  }
}

class Toyota6 extends Car6 {

  constructor(options) {
    // Run the constructor of Car6
    super(options);
    this.color = options.color;
    this.running = false;
  }

  honk() {
    // This would run the honk() of Car6,
    // if it has that method
    //super();
    return "Tööt6";
  }

  // Getters and Setter
  get Running() {
    return this.running;
  }

  set Running(start) {
    this.running = start;
    console.log("The value has been set.");
  }
}


const car6 = new Car6({ title: "Toyota6"});
const toyota6 = new Toyota6({ color: "red", title: "MyCar" });

console.log(car6);
console.log(toyota6);

// Using getters and setter
console.log(toyota6.Running);
toyota6.Running = true;
console.log(toyota6.Running);
console.log(toyota6);


// Use case
