import { Component, OnInit } from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [
    new Hero('Batman', 1),
    new Hero('Iron Man', 2),
    new Hero('Black Panther', 3),
    new Hero('Superman', 4),
    new Hero('Thor', 5),
  ];

  constructor() { }

  ngOnInit() {
  }

  heroSelected(hero: Hero) {
    console.log(`The selected hero is ${hero.name}`);
  }

  //Left off here: https://angular.io/guide/testing#test-dashboardherocomponent-stand-alone
}
