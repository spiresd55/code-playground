import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner-inline.component.html',
  styleUrls: ['./banner-inline.component.css']
})
export class BannerInlineComponent implements OnInit {

  title = 'Test Angular Title';
  welcome: string = '-- not initialized yet --';

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('HERE IS THE USERSERVICE');
    console.log(this.userService);
    this.welcome = this.userService.isLoggedIn() ?
      `Welcome ${this.userService.getUserName()}`: 'Please Log In';
  }

}
