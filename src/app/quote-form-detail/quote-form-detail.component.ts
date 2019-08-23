import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotation } from '../quotation'

@Component({
  selector: 'app-quote-form-detail',
  templateUrl: './quote-form-detail.component.html',
  styleUrls: ['./quote-form-detail.component.css']
})
export class QuoteFormDetailComponent implements OnInit {
  
  @Input() quote: Quotation;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
