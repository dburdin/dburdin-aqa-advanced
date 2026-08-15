import { Book } from './Book.js';

export class EBook extends Book {
  constructor({ ext, ...restProps }) {
    super(restProps);

    this._ext = ext;
  }

  printInfo() {
    console.log('Name: ' + this._name);
    console.log('Author: ' + this._author);
    console.log('Year: ' + this._year);
    console.log('File Extension: ' + this._ext);
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
