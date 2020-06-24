import { LoggingInterceptor } from './../shared/logging.interceptor';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
// import { shoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { dataStorageService } from '../shared/data-storage.service';
// import { AuthService } from '../auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.interceptor';
@NgModule(
    {
        declarations: [HeaderComponent, HomeComponent],
        imports: [
            SharedModule,
            AppRoutingModule
        ],
        exports: [
            AppRoutingModule, HeaderComponent
        ],
        providers: [RecipeService,
            dataStorageService,
            // AuthService,
            {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
            {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
        ]
    }
)
export class CoreModule{

}