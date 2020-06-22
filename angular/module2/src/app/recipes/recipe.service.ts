import { shoppingListService } from './../shopping-list/shopping-list.service';
import {  Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('A test Recipe',
         'This is simply a url',
          'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg'
          , [
              new Ingredient('banana', 5),
              new Ingredient('brinjal', 14)
          ]),
        new Recipe('Another test Recipe',
         'This is simply a URL',
        'https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg',
         [
             new Ingredient('Egg', 8),
             new Ingredient('Mango', 25)
         ]),
      ];
    constructor(private slService:shoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
    getRecipe(index: number){
        return this.recipes[index];
    }
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());

    }
    deleteRecipe(index: number)
    {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
    setRecipes(recipes: Recipe[]){
        console.log("3");
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}
