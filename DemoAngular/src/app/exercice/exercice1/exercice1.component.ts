import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component {
  compteurSeconde : number = 0 
  isActive : boolean = false
  isResetable : boolean = false
  intervalId :  any 

  demareChrono() : void{
    this.isActive = !this.isActive    
    this.isResetable = true
      this.intervalId = setInterval(() => { 
        this.compteurSeconde++ 
      }, 1000)
  }
  pause() : void {
    this.isActive = false
    clearInterval(this.intervalId)
  }
  reset() : number{
    clearInterval(this.intervalId)
    this.isActive = !this.isResetable
    this.isResetable = false
    return this.compteurSeconde = 0
  }
}
