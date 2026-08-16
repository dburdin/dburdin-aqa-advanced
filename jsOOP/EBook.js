import { Book } from './Book.js';

export class EBook extends Book {
  static fromBook({ name, author, year }, ext) {
    return new EBook({
      name,
      author,
      year,
      ext,
    });
  }

  constructor({ ext, ...restProps }) {
    super(restProps);

    this.ext = ext;
  }

  printInfo() {
    console.log('Name: ' + this.name);
    console.log('Author: ' + this.author);
    console.log('Year: ' + this.year);
    console.log('File Extension: ' + this.ext);
  }

  get ext() {
    return this._ext;
  }

  set ext(ext) {
    if (ext !== 'docx' && ext !== 'pdf') {
      console.log('This file extensions is not valid');
    } else {
      this._ext = ext;
    }
  }
}
