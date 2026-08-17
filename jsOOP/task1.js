import { Book } from './Book.js';
import { EBook } from './EBook.js';

// task 1.1
const firstBook = new Book({
  name: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960,
});
const secondBook = new Book({
  name: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925,
});

firstBook.printInfo();
console.log();
secondBook.printInfo();
console.log();

// task 1.2
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

// task 1.3
console.log(firstBook.name); // getter Book
firstBook.year = 1961; // setter Book
console.log(firstBook.year);

thirdBook.ext = 'docx'; // setter EBook
console.log(thirdBook.ext); // getter EBook
console.log();

// task 1.4
console.log(Book.getOldestBook([firstBook, secondBook, thirdBook, fourthBook]));
console.log();

// task 1.5
const fifthBook = new Book({ name: 'Mark', author: 'Solonin', year: 1000 });
console.log(EBook.fromBook(fifthBook, 'docx'));
