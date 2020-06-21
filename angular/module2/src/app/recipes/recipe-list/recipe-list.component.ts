import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
// import { EventEmitter } from 'events';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  id: number;
  subscription: Subscription;
  constructor(private recipeService: RecipeService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) =>{
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy(){  
    this.subscription.unsubscribe();
  }
}
