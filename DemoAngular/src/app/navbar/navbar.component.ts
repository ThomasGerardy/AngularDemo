import { Component } from '@angular/core';
import { ILink } from '../models/ILink';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  links : ILink[] = [
    {
      title : 'Accueil',
      url : '/',
      isVisible : true
    },
    {
      title : 'Démo',
      url : '/demo',
      children : [
        { title : 'Demo 1 - Les Bindings', url : '/demo1' },
        { title : ' Demo 2 - Les Pipes', url : '/demo2' },
        { title : 'Demo 3 - Les Directives', url : '/demo3' },
        { title : 'Demo 4 - Input & Ouput', url : '/demo4' },
        { title : 'Demo 5 - Services', url : '/demo5' },
        { title : 'Demo 6 - Les Formulaire', url : '/demo6'},
        { title : 'Demo 7 - Routing -> Fake Crud complet', url :'/demo7'}
      ],
      isVisible : false
    },
    {
      title : 'Exercice',
      url : '/exercice',
      children : [
        { title : 'Exercice 1 - Le Timer', url : '/exercice1' },
        { title : 'Exercice 2 - Le Panier', url : '/exercice2' },
        { title : 'Exercice 3 - Upgrade Panier', url : '/exercice3' },
        { title : 'Exercice 4 - Les formulaire', url : '/exercice4' },
      ],
      isVisible : false
    }
  ]

  toggleNav(i : number) : void {
    for(let j = 0; j < this.links.length; j++)
    {
      if(j !== i)
        this.links[j].isVisible = false
    }
    this.links[i].isVisible = !this.links[i].isVisible
  }
}