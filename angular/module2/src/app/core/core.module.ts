import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { shoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { dataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
@NgModule(
    {
        declarations:[HeaderComponent, HomeComponent],
        imports: [
            SharedModule,
            AppRoutingModule
        ],
        exports:[
            AppRoutingModule, HeaderComponent
        ],
        providers:[shoppingListService, RecipeService, dataStorageService, AuthService]
    }
)
export class CoreModule{

}