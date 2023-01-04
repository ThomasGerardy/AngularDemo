import { Component, OnInit } from '@angular/core';
import { IFormateur } from 'src/app/models/IFormateur';
import { FormateurService } from 'src/app/shared/services/formateur.service';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {
  list : IFormateur[] = []
  constructor(private _formateurService : FormateurService){

  }

  ngOnInit() : void {
    this.list = this._formateurService.getAll()
  }
  delete(id : number) : void{
    this._formateurService.delete(id)
    this.list = this._formateurService.getAll()
  }

}
