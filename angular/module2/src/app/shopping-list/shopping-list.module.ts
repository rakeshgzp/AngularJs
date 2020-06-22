import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        ShoppingEditComponent,
        ShoppingListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ShoppingListModule{

}