import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Quotation } from '../quotation';
;
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quotation("", "", "", new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quotation>();

  submitsomeQuotes(){
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit() {
  }
}

