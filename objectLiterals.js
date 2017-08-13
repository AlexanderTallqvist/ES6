/*jshint esversion: 6 */

function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    },
  };
}

// Using enhanced object literals
function createBookShopLiteral(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    },
  };
}

const inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "Eloquent JavaScript", price: 15 },
];

const bookShop = createBookShopLiteral(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle("Harry Potter"));


function saveFile() {
  $.ajax({
    method: 'POST',
    url: url,
    data: data
  });
}

// These two are identical
// Key-value pairs should idealy be at the bottom

function saveFileLiteral(url, data) {
  $.ajax({
    url,
    data,
    method: 'POST',
  });
}

const url = "http://fileupload.com";
const data = { color:"red" };
saveFileLiteral(url, data);
