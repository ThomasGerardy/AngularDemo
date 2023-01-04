import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFormateur } from 'src/app/models/IFormateur';
import { FormateurService } from 'src/app/shared/services/formateur.service';

@Component({
  selector: 'app-demo7create',
  templateUrl: './demo7create.component.html',
  styleUrls: ['./demo7create.component.scss']
})
export class Demo7createComponent {
  
  forfor : FormGroup
  constructor( private _fb : FormBuilder, private _fs : FormateurService, private _router : Router){
    this.forfor = this._fb.group({
      nom : [null, [Validators.required]],
      prenom : [null, [Validators.required]],
      dateNaiss : [null, [Validators.required]],
      animal : [null, []]
    })
  }
  add() : void{
    if(this.forfor.valid)
    {
     let formateurAAdd : IFormateur = {
      id : 0,
      nom : this.forfor.value.nom,
      prenom : this.forfor.value.prenom,
      dateNaiss : new Date(this.forfor.value.dateNaiss),
      avatar : '../../assets/images/aude.png',
      animal : this.forfor.value.animal
     } 
     this._fs.create(formateurAAdd)
     this._router.navigateByUrl('/demo/demo7')
    }
    else{
      console.log('Raté bouffon')
    }
  }
}
