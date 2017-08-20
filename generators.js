/*jshint esversion: 6 */

// Generators
// Usually used to iterate through complex data structures

function* shopping() {

  const stuffFromStore = yield 'cash';
  const cleanClothes   = yield 'laundry';

  return [stuffFromStore, cleanClothes];
}


const gen = shopping();
gen.next();
gen.next('groceries');
gen.next('clean clothes');
console.log(gen);


function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const colorGen = colors();
colorGen.next(); // { value: red, done: false }
colorGen.next(); // { value: blue, done: false }
colorGen.next(); // { value: green, done: false }
console.log(colorGen.next()); // { value: undefined, done: true }


const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}

console.log(myColors); // [ 'red', 'blue', 'green' ]


const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  // Symbol.iterator tells a for of loop how
  // it should iterate through an object
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',

  // Move our teamIterator generator here
  [Symbol.iterator]: function* () {
    yield  this.lead;
    yield  this.manager;
    yield  this.engineer;
    yield* this.testingTeam;
  }
};


// function* teamIterator(team) {
//   yield team.lead;
//   yield team.manager;
//   yield team.engineer;
//
//   // Loop over the testingTeams Symbol.iterator
//   yield* team.testingTeam;
// }

const names = [];

for(let name of engineeringTeam) {
  names.push(name);
}

console.log(names);


// Use case

class Comment {
  constructor(content, children) {
    this.content  = content;
    this.children = children;
  }

  // A generator inside a class
  *[Symbol.iterator]() {
    yield   this.content;
    for(let child of this.children) {
      yield* child;
    }
  }
}

const grandChildren = [
  new Comment('GrandChild comment1!', []),
  new Comment('GrandChild comment2!', []),
];

const children = [
  new Comment('good comment', grandChildren),
  new Comment('bad comment', []),
  new Comment('meh comment', []),
];

const root = new Comment('Great Post!', children);

const values = [];
for (let value of root) {
  values.push(value);
}

console.log(values);
