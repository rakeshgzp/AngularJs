import { shoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
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
}
