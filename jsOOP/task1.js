import { Book } from './Book.js';
import { EBook } from './EBook.js';

const firstBook = new Book({ name: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 });
const secondBook = new Book({
  name: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925,
});

firstBook.printInfo();
console.log();
secondBook.printInfo();
console.log();
// !-------------------------------------

const thirdBook = new EBook({
  name: 'Clean Code',
  author: 'Robert C. Martin',
  year: 2008,
  ext: 'pdf',
});
const fourthBook = new EBook({
  name: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  year: 1999,
  ext: 'docx',
});

thirdBook.printInfo();
console.log();
fourthBook.printInfo();
console.log();
//!--------------------------------------
