export class Quotation {
  public showDescription :boolean;
  constructor(public id: number, public name: string, public description: string, public authorName: string, public Date: Date){
    this.showDescription=false;
  }  
}
