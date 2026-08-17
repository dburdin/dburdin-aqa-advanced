export class Book {
  static getOldestBook(books) {
    return [...books].sort((a, b) => a.year - b.year)[0];
  }
  constructor({ name, author, year }) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  printInfo() {
    console.log('Name: ' + this.name);
    console.log('Author: ' + this.author);
    console.log('Year: ' + this.year);
  }

  get name() {
    return this._name;
  }
  get author() {
    return this._author;
  }
  get year() {
    return this._year;
  }

  set name(name) {
    if (typeof name !== 'string' || name.length === 0) {
      console.log('This name is not valid');
    } else {
      this._name = name;
    }
  }
  set author(author) {
    if (typeof author !== 'string' || author.length === 0) {
      console.log('This author is not valid');
    } else {
      this._author = author;
    }
  }
  set year(year) {
    const currentYear = new Date().getFullYear();

    if (typeof year !== 'number' || year > currentYear) {
      console.log('This year is not valid');
    } else {
      this._year = year;
    }
  }
}
