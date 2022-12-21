import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.scss']
})
export class Exercice4Component {
  signinForm : FormGroup

  constructor(private _fb : FormBuilder){
    this.signinForm = this._fb.group({
      nis : [null, [Validators.required, Validators.min(10000000000), Validators.max(99999999999)]],
      name : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      firstname : [null , [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      birthdate : [null, [Validators.required, this.majeurValidator()]],
      gender : [null, [Validators.required]],
      accounttype : ['', [Validators.required]],
      phone : [null, []],
      mail : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
      confirmpassword : [null, []],
      hasadress : [null, [Validators.required]],
    }, { validators : this.mustMatch() })
  }
  majeurValidator() : ValidatorFn | null{
    return (control : AbstractControl) => {
      if(control.value != '' && control.value != null){
        let todayYear = new Date().getFullYear()
        let inputYear = new Date(control.value).getFullYear()
        if(todayYear - inputYear < 18)
          return { mineur : true}
      }
      return null
    }
  }
  
  submitForm() : void {
    if(this.signinForm.valid){
      console.log('Formulaire valide : Envoyé')
      
    }
    else{
      this.signinForm.markAllAsTouched()
    }
  }

  mustMatch() : ValidatorFn | null {
    return (form : AbstractControl) => {
      if(form.get('password')?.value === form.get('confirmpassword')?.value)
        return { pwdcheck : true}
      return null
    }
  }
}
 