import { Component } from '@angular/core';
import { Iarticle } from 'src/app/models/IArticle';
@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component {
  nameArticle : string = ''
  quantityArticle : number = 0
  isExist : boolean = false
  article : Iarticle = {name : this.nameArticle, quantity : this.quantityArticle}
  panier : Iarticle[] = []
  addElemPanier() : void {
    this.quantityArticle = 0
    this.isExist = false
    if(this.panier.length === 0)
    {
      this.panier.push({name : this.nameArticle, quantity : 0})
    }
    // Upgrade : revoir avec un list.find( a => a ...) à la palce de la boucle 
    for(let i : number = 0; i < this.panier.length; i++)
    {
      if(this.panier[i].name.toLowerCase() === this.nameArticle.toLowerCase().trim())
      {
        this.isExist = true
        this.panier[i].quantity++
      }
    }
    if(!this.isExist)
      this.panier.push({name : this.nameArticle.trim(), quantity : 1})
    this.nameArticle = ''
  }
  addElem(article : Iarticle) : void{
    for(let i : number = 0; i < this.panier.length; i++)
    {
      if(this.panier[i] == article)
      {
        this.panier[i].quantity++
      }
    }
  }
  removeElem(article : Iarticle) : void{
    for(let i : number = 0; i < this.panier.length; i++)
    {
      if(this.panier[i] == article)
      {
        this.panier[i].quantity--
      }
    }
  }
  deleteElem(article : Iarticle) : void{
    for(let i : number = 0; i < this.panier.length; i++)
    {
      if(this.panier[i] == article)
      {
        this.panier.splice(i, 1)
      }
    }
  }
}
