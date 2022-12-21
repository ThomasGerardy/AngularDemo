import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercice1Component } from './exercice1/exercice1.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { Exercice4Component } from './exercice4/exercice4.component';

const routes: Routes = [
  { path : 'exercice1', component : Exercice1Component },
  { path : 'exercice2', component : Exercice2Component },
  { path : 'exercice3', component : Exercice3Component },
  { path : 'exercice4', component : Exercice4Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
