import { Component } from '@angular/core';
import { IFormateur } from 'src/app/models/IFormateur';
@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component {
 prenomParent : string = 'Robert'
 age : number = 0

 envieEnfant : string = '[en attente de réponse du gosse]'

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
  formateurDuJour : string = 'inconnu'
  changeEnvie(envie : string) : void {
  this.envieEnfant = envie
 }
 setName(name : string) : void {
  this.formateurDuJour = name
 }
}
