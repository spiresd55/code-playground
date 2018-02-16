import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUserName() {
    return 'Test User';
  }

  isLoggedIn() {
    return true;
  }
}
