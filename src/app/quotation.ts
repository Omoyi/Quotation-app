export class Quotation {
   showDescription :boolean;
  constructor(public name: string, public description: string, public authorName: string, public completeDate: Date, public downVote: number, public upVote: number){
    this.showDescription=false;
  }  
}
