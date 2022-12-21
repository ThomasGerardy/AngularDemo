import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  private _user : IUser[] = [
    { id : 1, pseudo : 'audeb', password : '123aude', firstName : 'Aude', lastName : 'Beurive' },
    { id : 2, pseudo : 'khinl', password : '123khun', firstName : 'Khun', lastName : 'Ly' }
  ]
  constructor() { }

  connection(pseudo : string, password : string) : IUser | undefined {
    //check in db si pseudo existe
    let userFound = this._user.find(u => u.pseudo === pseudo)
    if(userFound)
      // check mdp correspond 
      if(userFound.password === password)
        return userFound

    // si mdp pas égaux ou pseudo pas trouvé :
    return undefined
  }
  disconnection() : undefined{
    // en vrai il fautdra quand on aura une vrai auth , degagéer le tojen de la session etc
    return undefined
  }
}
