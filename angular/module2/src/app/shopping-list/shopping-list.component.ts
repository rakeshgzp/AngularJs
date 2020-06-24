import { Ingredient } from 'src/app/shared/ingredients.model';
import { Store } from '@ngrx/store';
// import { shoppingListService } from './shopping-list.service';
import { Component, OnInit} from '@angular/core';
import {  Observable } from 'rxjs';
import * as fromApp from '../../app/store/app.reducers';
import * as ShoppingListActions from './store/shopping-list.actions';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  // private subscription: Subscription;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription = this.slService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
  onEditItem(index: number){
    console.log("Editing clicked");
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
