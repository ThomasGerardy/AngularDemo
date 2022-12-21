import { Component } from '@angular/core';
import { connect } from 'rxjs';
import { IUser } from 'src/app/models/IUser';
import { FakeAuthService } from 'src/app/shared/services/fake-auth.service';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component {
  connectedUser : IUser | undefined
  pseudo : string = ''
  pwd : string = ''

constructor(private _userService : FakeAuthService){

}

connect() : void {
  this.connectedUser = this._userService.connection(this.pseudo, this.pwd)
  this.pseudo = ''
  this.pwd = ''
}

disconnect() : void{
  this.connectedUser = this._userService.disconnection()
}
}