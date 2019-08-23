import { Component, OnInit } from '@angular/core';
import { Quotation } from '../quotation';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
someQuotes: Quotation[] = [
  // new Quotation(1, "If your inside doesn't change now, your outside will not change then")
]

toggleDetails(index){
  this.someQuotes[index].showDescription = !this.someQuotes[index].showDescription;
}

addNewQuote(quote){
  
}
  constructor() { }

  ngOnInit() {
  }

}
