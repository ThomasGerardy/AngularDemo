import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemp'
})
export class ConvertTempPipe implements PipeTransform {

  transform(value: number, unit : string): number {
    switch(unit){
      case 'c' : return (value - 32) * 5 / 9
      case 'f' : return value * 9 / 5 + 32

      default : return value
    }
  }

}
