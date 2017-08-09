/*jshint esversion: 6 */

// Filter //
// Filter out items from an array
// Returns a "thruthy" or a "falsy" item

var products = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 10 },
  { name: "tomato",   type: "vegetable", quantity: 2, price: 6  },
  { name: "orange",   type: "fruit",     quantity: 3, price: 70  },
];

var fruits = products.filter(function(product) {
  return product.type === 'fruit';
});

var fruitsAgain = products.filter(function(product) {
  return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});

console.log(fruits);
console.log(fruitsAgain);

var posts = { id: 4, title: "New Post"};

var comments = [
  { postId: 4, title: "awesum"},
  { postId: 2, title: "meh post"},
  { postId: 4, title: "neat"},
];

function commentsForPosts(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

var commentsForPost = commentsForPosts(posts, comments);

console.log(commentsForPost);


// Filter unique numbers

var filterArray = [1, 1, 2, 3, 4, 4, 4, 4, 6];
var list = filterArray.filter((x, i, a) => a.indexOf(x) == i);

console.log(list);

// Index of first 1 == 0, current index == 0, true
// Index of first 1 == 0, current index == 1, false
// Index of first 2 == 2, current index == 2, true
// Index of first 3 == 3, current index == 3, true

// x --> item in array
// i --> index of item
// a --> array reference, (in this case "filterArray")
