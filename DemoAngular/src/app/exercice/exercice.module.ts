import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExerciceRoutingModule } from './exercice-routing.module';
import { Exercice1Component } from './exercice1/exercice1.component';
import { ExerciceComponent } from './exercice.component';
import { SharedModule } from '../shared/shared.module';
import { Exercice2Component } from './exercice2/exercice2.component';
import { PanierComponent } from './exercice2/panier/panier/panier.component';
import { Exercice3Component } from './exercice3/exercice3.component';
import { Panierv2Component } from './exercice3/panier/panier/panier.component';
import { Exercice4Component } from './exercice4/exercice4.component';


@NgModule({
  declarations: [
    Exercice1Component,
    ExerciceComponent,
    Exercice2Component,
    PanierComponent,
    Panierv2Component,
    Exercice3Component,
    Exercice4Component
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap : [ExerciceComponent]
})
export class ExerciceModule { }
