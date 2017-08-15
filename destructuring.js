/*jshint esversion: 6 */

// Destructuring

var expense = {
  type: "Business",
  amount: "45€",
  value: 23,
  index: 3,
};

// var type   = expense.type;
// var amount = expense.type;

// Declares a new variable called type, that references
// the expense.type property.
const { type }   = expense;
const { amount } = expense;

// Declaring multiple variables
const { value, index } = expense;


// Destructuring function arguments
var savedFiles = {
  extension: "jpeg",
  name: "repost",
  size: 123,
};

function fileSummary(file) {
  return `Thie file ${file.name}.${file.extension} is of size ${file.size}`;
}

// We are pulling properties of the first object that is passed in.
function fileSummaryES6({ name, extension, size }) {
  return `Thie file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(savedFiles));
console.log(fileSummaryES6(savedFiles));

// Destructuring arrays
const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name ] = companies;
console.log(name);

const [ name1, name2 ] = companies;
console.log(name, name2);

// Using the spread operator
const [ first, ...rest ] = companies;
console.log(first, rest);

// Accessing the array object
const { length } = companies;
console.log(length);


//

const myCompanies = [
  {test: "Google", location: "Mountain View"},
  {test: "Facebook", location: "Menlo Park"},
  {test: "Uber", location: "San Francisco"},
];

// Accessing the first element in the array,
// and the first property of that item,
// aka "Mountain View"
const [{ location }] = myCompanies;
console.log(location);



const Google = {
  locations: ['Mountain View', 'New York', 'London'],
};

// Acces the locations propert, and pull out the first element
const { locations: [ locations ] } = Google;
console.log(locations);


// Use case for object destructuring
function signUp({username, password, email, dateOfBirt, city}) {
  // create a new user
}

const user = {
  username: "Alexander",
  password: "Mypassword",
  email: "email",
  dateOfBirt: "1.1.1999",
  city: "Espoo",
};

signUp(user);


// Use case for array destructuring
const points = [
  [4, 5],
  [41, 15],
  [24, 51],
];

// Here we already do the destructuring in
// the map parameter
const newPoints = points.map(([x, y]) =>{
  //return { x: x, y: y };
  // With the new object literals
  return { x, y };
});

console.log(newPoints);


const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return { subject, time, teacher };
});

console.log(classesAsObject);


const numbers = [1, 2, 3];

function double([head, ...tail]) {
  if (head === undefined) return [];
  return [2*head, ...double(tail)];
}

console.log(double(numbers));
