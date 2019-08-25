import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let today:Date = new Date();
    let todayWithNoTime: any = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference = Math.abs(todayWithNoTime - value)
    const secondsInADay = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001;
    var dateCounter = dateDifferenceSeconds / secondsInADay;
    if (dateCounter >= 1) {
      return dateCounter;
    } else {
      return 0;
    }
  }

}