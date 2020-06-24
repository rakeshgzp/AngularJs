// import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
@Injectable()
export class dataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService,
        // private authService: AuthService
        ){}

    storeRecipes(){
        // const token = this.authService.getToken();
        // return this.http.put( 'https://ng-recipe-book-cddeb.firebaseio.com/recipes.json',
        // this.recipeService.getRecipes(), {
        //     observe: 'body',
        //     params: new HttpParams().set('auth', token)
        // });
        // const req = new HttpRequest('PUT', 'https://ng-recipe-book-cddeb.firebaseio.com/recipes.json',
        // this.recipeService.getRecipes(), { reportProgress: true, params: new HttpParams().set('auth', token)});
        const req = new HttpRequest('PUT', 'https://ng-recipe-book-cddeb.firebaseio.com/recipes.json',
        this.recipeService.getRecipes(), { reportProgress: true});

        return this.http.request(req);
    }
    getRecipes(){
        // const token = this.authService.getToken();
        this.http.get<Recipe[]>( 'https://ng-recipe-book-cddeb.firebaseio.com/recipes.json')
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