import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {
  prenom : string = 'Thomas'
  prenom2 : string = ''

 jour : string = ''
  changerJour(j : string) : void {
    this.jour = j
  }

  id : string = 'ma-div'
  isActive : boolean = false

  toggleActive() : void {
    this.isActive = !this.isActive
  }
}
