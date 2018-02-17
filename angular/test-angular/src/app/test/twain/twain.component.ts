import { Component, OnInit } from '@angular/core';
import { TwainService } from "./twain.service";

@Component({
  selector: 'twain-quote',
  templateUrl: './twain.component.html',
  styleUrls: ['./twain.component.css']
})
export class TwainComponent implements OnInit {
  intervalId: number;
  quote : any  = '...';

  constructor(private twainService: TwainService) { }

  ngOnInit() {
    //TODO: ASSIGN QUOTE TO COMPONENT QUOTE
    this.twainService.getQuote().then(quote => this.quote = quote);
  }

}
