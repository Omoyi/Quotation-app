import { Component, OnInit } from '@angular/core';
import { Quotation } from '../quotation';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
someQuotes: Quotation[] = [
  new Quotation('Rachel', "If your inside doesn't change now, your outside will not change then", ' BR Ewald Frank', new Date(2019,9,24), 0, 0),
];

toggleDetails(index){
  this.someQuotes[index].showDescription = !this.someQuotes[index].showDescription;
}

addNewQuote(quote){
  let theLength = this.someQuotes.length;
    quote.id = theLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.someQuotes.push(quote)
}

deleteQuote(isComplete, index){
  if(isComplete) {
    let toDelete = confirm(`Are you sure you want delete ${this.someQuotes[index].name}?`)
    if(toDelete) {
    this.someQuotes.splice(index,1);
    }
  }
}
  constructor() { }

  ngOnInit() {
  }

}
