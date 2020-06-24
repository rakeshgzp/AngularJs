import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }
  onSignin(form: NgForm){
    // this.authService.signinUser(form.value.email, form.value.password);
    this.store.dispatch(new AuthActions.TrySignin({username: form.value.email,
       password: form.value.password}));
  }
}
