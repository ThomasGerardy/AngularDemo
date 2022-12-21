import { Component } from '@angular/core';
import { Iarticle } from 'src/app/models/IArticle';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class Panierv2Component {
 
  panier : Iarticle[]
  constructor(private _articleService : ArticleService){
    this.panier = this._articleService.getList()
  }

  add(id : number) : void{
    this._articleService.plus(id)
  }
  remove(id : number) : void{
    this._articleService.less(id)
  }
  del(id : number) : void{
    this._articleService.delete(id)
  }
}