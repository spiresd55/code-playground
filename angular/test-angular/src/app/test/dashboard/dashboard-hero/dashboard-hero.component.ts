import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-dashboard-hero',
  templateUrl: './dashboard-hero.component.html',
  styleUrls: ['./dashboard-hero.component.css']
})
export class DashboardHeroComponent implements OnInit {

  @Input() hero: Hero;
  @Output() selected: EventEmitter<Hero> = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.selected.emit(this.hero);
  }
}
