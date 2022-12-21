import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFormateur } from 'src/app/models/IFormateur';

@Component({
  selector: 'app-formateur-card',
  templateUrl: './formateur-card.component.html',
  styleUrls: ['./formateur-card.component.scss']
})
export class FormateurCardComponent {
  @Input() formateur! : IFormateur
  @Output() sendName : EventEmitter<string>

  constructor(){
    this.sendName = new EventEmitter<string>();
  }
  envoieNom() : void {
    this.sendName.emit(this.formateur.prenom)
  }
  
}
