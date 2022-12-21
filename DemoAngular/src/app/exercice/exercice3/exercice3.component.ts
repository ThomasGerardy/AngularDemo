import { Component } from '@angular/core';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.scss']
})
export class Exercice3Component {
  constructor(private _articleService : ArticleService){}

  nameArticle : string = ''
  nbr : number = 1


  add(){
    if(this.nameArticle.trim() !== '')
      this._articleService.add(this.nameArticle, this.nbr) 
    this.nameArticle = ''
    this.nbr = 1  
  }
}
