import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTimer'
})
export class ToTimerPipe implements PipeTransform {

  transform(value: number): string {
  
    return `${Math.floor(value/60) > 9 ? Math.floor(value/60) : '0' + Math.floor(value/60)} : ${value % 60 > 9 ? value % 60 : '0' + value % 60}`;

  }

}
