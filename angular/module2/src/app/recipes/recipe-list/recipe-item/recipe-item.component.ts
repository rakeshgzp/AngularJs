import { RecipeService } from './../../recipe.service';
import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }
  onSelected(){
      this.recipeService.recipeSelected.emit(this.recipe);
  }
  ngOnInit(): void {
  }

}
