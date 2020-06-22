import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
// import {Response} from '@angular/common';
@Injectable()
export class dataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService,
        private authService: AuthService){}

    storeRecipes(){
        const token = this.authService.getToken()
        return this.http.put( "https://ng-recipe-book-cddeb.firebaseio.com/recipes.json?auth="+token,
        this.recipeService.getRecipes());
    }
    getRecipes(){
        const token = this.authService.getToken()
        this.http.get<Recipe[]>("https://ng-recipe-book-cddeb.firebaseio.com/recipes.json?auth="+token)
        .subscribe(
            (recipes: Recipe[]) => {
            for (let recipe of recipes){
                if (!recipe[ 'ingredients' ]){
                    recipe['ingredients'] = [];
                }}
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}