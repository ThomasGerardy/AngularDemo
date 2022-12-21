import { Component } from '@angular/core';
import { IFormateur } from 'src/app/models/IFormateur';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component {
 //ngModel
  plat : string = ''
  //ngStyle
  myColor : string = 'darkgreen'
  myColors : string[] = ['darkred', 'darkgreen', 'darkblue', 'darkblue', 'goldenrod']
  i : number = 0
  //ngClass
  isGras : boolean = false
  isGros : boolean = false
  isItalique : boolean = false
  isJour : boolean = true

  //ngFor
  formateurs : IFormateur[] = [{
    id : 1,
    nom : 'Beurive',
    prenom : 'Aude',
    dateNaiss : new Date(1989, 9, 16),
    avatar : '../../assets/images/aude.png'
  },
  {
    id : 2,
    nom : 'Ly',
    prenom : 'Khun',
    dateNaiss : new Date(1982, 4, 3),
    avatar : '../../assets/images/khun.png'
  },
  {
    id : 3,
    nom : 'Chaineux', 
    prenom : 'Gavin',
    dateNaiss : new Date(1993, 9, 18),
    animal : 'Sky',
    avatar : '../../assets/images/gavin.png'
  },
  {
    id : 4,
    nom : 'Strimelle',
    prenom : 'Aurélien',
    dateNaiss : new Date(1989, 10, 1),
    animal : 'Lachatte',
    avatar : '../../assets/images/aurelien.png'
  }
]

//ngFor
choix! : number
  constructor(){
    //pour le ngStyle -> ça change les couleurs si si
    setInterval(()=> 
      {
        this.myColor = this.myColors[this.i]
        this.i++
        if(this.i >= 4 )
          this.i = 0
    }, 1000)
  }
  toggleGras() : void {
    this.isGras = !this.isGras
  }

  toggleGros() : void {
    this.isGros = !this.isGros
  }
  toggleItalique() : void {
    this.isItalique = !this.isItalique
  }
  toggleJour() : void {
    this.isJour = !this.isJour
  }
}
