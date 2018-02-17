import { Injectable } from '@angular/core';

@Injectable()
export class TwainService {

  constructor() { }

  getQuote() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve('Here is a test quote');
      }, 6000)
    });
  }
}
