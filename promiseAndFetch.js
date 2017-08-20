/*jshint esversion: 6 */

// Promises
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

promise
  .then(() => {
    console.log("We are done!");
  })
  .then(() => {
    console.log("I was also ran!");
  })
  .catch(() => {
    console.log("We are not done!");
  });


// Fetch
let url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  .then((response) => {
    response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("We are not done!");
  });
