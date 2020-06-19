import { shoppingListService } from './../shopping-list.service';
import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private slService: shoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
    this.amountInputRef.nativeElement.value);
    this.slService.addIngredient(newIngredient);
  }
}
