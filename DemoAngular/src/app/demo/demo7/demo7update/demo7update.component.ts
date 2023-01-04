import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFormateur } from 'src/app/models/IFormateur';
import { FormateurService } from 'src/app/shared/services/formateur.service';

@Component({
  selector: 'app-demo7update',
  templateUrl: './demo7update.component.html',
  styleUrls: ['./demo7update.component.scss']
})
export class Demo7updateComponent implements OnInit{
  forfor : FormGroup
  idForm : number
  constructor(private _activeRoute : ActivatedRoute, private _fb : FormBuilder, private _fs : FormateurService, private _router : Router){
    this.forfor = this._fb.group({
      nom : [null, [Validators.required]],
      prenom : [null, [Validators.required]],
      dateNaiss : [null, [Validators.required]],
      animal : [null, []]
    })
    this.idForm = parseInt(this._activeRoute.snapshot.params['id'])
  }
  ngOnInit(): void {
    let formateur : IFormateur | undefined = this._fs.getById(this.idForm)
    if(formateur){
      this.forfor.patchValue({
        nom : formateur.nom,
        prenom : formateur.prenom,
        //TODO : trouver un truc mieux 
        dateNaiss : formateur.dateNaiss.toLocaleString(undefined, {year : 'numeric', month : '2-digit', day : '2-digit'}),
        animal : formateur.animal
      })
    }
  }
  update() : void{
    if(this.forfor.valid)
    {
     let formateurUpdate : IFormateur = {
      id : 0,
      nom : this.forfor.value.nom,
      prenom : this.forfor.value.prenom,
      dateNaiss : new Date(this.forfor.value.dateNaiss),
      avatar : '../../assets/images/aude.png',
      animal : this.forfor.value.animal
     } 
     this._fs.update(formateurUpdate, this.idForm)
     this._router.navigateByUrl('/demo/demo7')
    }
    else{
      console.log('Raté bouffon')
    }
  }
}
