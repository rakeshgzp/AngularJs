import { AuthService } from './../../auth/auth.service';
import { dataStorageService } from './../../shared/data-storage.service';
import { Component } from '@angular/core';
// import { Response } from '@angular/common/http';
// import { EventEmitter } from 'protractor';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    constructor( private dataStorageService: dataStorageService,
        private authService: AuthService){}

    onSaveData(){
        this.dataStorageService.storeRecipes().subscribe(
            (response: Response) => {console.log(response);}
        );
    }
    onFetchData(){
        this.dataStorageService.getRecipes();
       }
    onLogout(){
        this.authService.logout();
    }
}
