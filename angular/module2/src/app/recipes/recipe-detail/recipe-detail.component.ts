import * as ShoppingListActions from './../../shopping-list/store/shopping-list.actions';
import { Store } from '@ngrx/store';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipService: RecipeService, private route: ActivatedRoute
    ,private router: Router, private store: Store<any>) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipService.getRecipe(this.id);
    });
  }
  onAddToShoppingList(){
    // this.recipService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteRecipe(){
    this.recipService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
