import { Injectable } from '@angular/core';
import { Iarticle } from 'src/app/models/IArticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 
  private _panier : Iarticle[] = []
  
  constructor() { }

  getList() : Iarticle[]{
    return this._panier
  }

  add(nameArticle : string, nbr : number) : void{
    let toAdd = this._panier.find( a => a.name.toLowerCase() === nameArticle.trim().toLowerCase())
    if(!toAdd){
      this._panier.push({name : nameArticle.trim(), quantity : nbr })
    }
    else
      toAdd.quantity+= nbr
  }

  plus(id : number) : void{
    this._panier[id].quantity++
  }
  less(id : number) : void {
    this._panier[id].quantity--
    if(this._panier[id].quantity === 0)
      this.delete(id)
  }
  delete(id : number) : void {
    this._panier.splice(id, 1)
  }
}
