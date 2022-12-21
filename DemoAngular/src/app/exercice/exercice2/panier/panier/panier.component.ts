import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iarticle } from 'src/app/models/IArticle';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {
  @Input() elements! : Iarticle[]
  @Output() addArticle : EventEmitter<Iarticle>
  @Output() removeArticle : EventEmitter<Iarticle>
  @Output() deleteArticle : EventEmitter<Iarticle>

  constructor(){
    this.addArticle = new EventEmitter<Iarticle>()
    this.removeArticle = new EventEmitter<Iarticle>()
    this.deleteArticle = new EventEmitter<Iarticle>()
  }

  downElem(article : Iarticle) : void {
    this.removeArticle.emit(article)
    if(article.quantity === 0)
      this.deleteArticle.emit(article)
  }
  uppElem(article : Iarticle) : void {
    this.addArticle.emit(article)
  }
  delElem(article : Iarticle) : void {
    this.deleteArticle.emit(article)
  }
  

}
