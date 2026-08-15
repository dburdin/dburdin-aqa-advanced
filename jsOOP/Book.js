export class Book {
  constructor({ name, author, year }) {
    this._name = name;
    this._author = author;
    this._year = year;
  }

  printInfo() {
    console.log('Name: ' + this._name);
    console.log('Author: ' + this._author);
    console.log('Year: ' + this._year);
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
    if (typeof year !== 'number') {
      console.log('This year is not valid');
    } else {
      this._year = year;
    }
  }
}
