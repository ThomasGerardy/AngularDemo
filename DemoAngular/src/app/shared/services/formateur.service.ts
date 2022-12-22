import { Injectable } from '@angular/core';
import { IFormateur } from 'src/app/models/IFormateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private _formateurs : IFormateur[] = [
    {
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
  constructor() { }
  getAll() : IFormateur[]{
    return this._formateurs
  }
  getById(id : number) : IFormateur | undefined{
    return this._formateurs.find( f => f.id === id)
  }
  create(formateur : IFormateur){
    let newId = Math.max(...this._formateurs.map( f => f.id))+1
    formateur.id = newId
    this._formateurs.push(formateur)
  }
  update(formateur : IFormateur, id : number) : void{
    this.delete(id)
    this._formateurs.push(formateur)
  }
  delete(id : number) : void{
   this._formateurs.splice(this._formateurs.findIndex( f => f.id === id), 1)
  }
}
