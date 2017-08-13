/*jshint esversion: 6 */

function makeAjaxRequest(url, method = 'GET') {
  return method;
}

console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', 'POST'));


function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

const alexander = createAdminUser();
console.log(alexander);
