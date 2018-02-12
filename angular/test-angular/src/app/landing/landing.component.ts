import { Component, OnInit } from '@angular/core';
import { Language } from "./language";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  language: string = "";
  //languages: string[] = ["Javascript", "Java", "Python", "Node"];

  languages: Language[] = [
    new Language(1, "Javascript"),
    new Language(2, "Java"),
    new Language(3, "Python"),
    new Language(4, "Node")
  ];

  title: string = "Favorite Programming Languages";

  constructor() { }

  ngOnInit() {
    this.language = this.languages[0].language;
  }

}
