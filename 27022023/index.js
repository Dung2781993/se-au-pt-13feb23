/**
 * Try creating a json object for BOOK, the book should have a title, 
 * description, author and number of pages
 */
const bookJSON = require('./book.json')

//Print values

const title = bookJSON?.title ?? 'No Title';
//console.log(title);

const pages = bookJSON?.number_of_pages ?? 0;
//console.log(pages);

//Add more field (Key, value) into JSON
//price: 50 pound

const testArr = [0, 1];
testArr[0] = 2;
console.log(testArr);