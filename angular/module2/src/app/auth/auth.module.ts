import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [SignupComponent, SigninComponent],
    imports: [CommonModule, FormsModule, AuthRoutingModule]
})
export class AuthModule{

}