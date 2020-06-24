import * as AuthActions from './../../auth/store/auth.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
// import { AuthService } from './../../auth/auth.service';
import { dataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
// import { HttpEvent } from '@angular/common/http';
// import { Response } from '@angular/common/http';
// import { EventEmitter } from 'protractor';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
    authState: Observable<fromAuth.State>;
    constructor( private dataStorageService: dataStorageService,
        //  public authService: AuthService,
        private store: Store<any>){}

    onSaveData(){
        this.dataStorageService.storeRecipes().subscribe(
            (response) => {console.log(response); }
        );
    }
    ngOnInit(){
        this.authState = this.store.select('auth');
    }
    onFetchData(){
        this.dataStorageService.getRecipes();
       }
    onLogout(){
        this.store.dispatch(new AuthActions.Logout());
    }
}
