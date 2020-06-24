import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from 'src/app/shared/ingredients.model';
// Stores an array of ingredients to manage addition or removal of ingredients
export interface State{
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIngredientIndex: number,
}
const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10),
      ],
      editedIngredient: null,
      editedIngredientIndex: -1,
};
export function shoppingListReducers(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return{
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return{                                       //return new state by including payload in ingredient array 
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient,                        //Holding properties of ingredient type
                ...action.payload.ingredient           // extraction of updated ingredient from payload 
            };
            const ingredients = [...state.ingredients];        //copied previous state array in ingredient array
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return{
                ...state,
                ingredients: this.ingredients,
                editedIngredients: null,
                editedIngredientIndex : -1
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(state.editedIngredientIndex, 1)
            return{
                ...state,
                ingredients: oldIngredients,
                editedIngredients: null,
                editedIngredientIndex : -1
            }
        case ShoppingListActions.START_EDIT:
            const editedIngredient = {...state.ingredients[action.payload]};
            return{
                ...state,
                editedIngredient : editedIngredient,
                editedIngredientIndex : action.payload
            };
        case ShoppingListActions.STOP_EDIT:
            return{
                ...state,
                editedIngredient : null,
                editedIngredientIndex : -1
            };
        default:
            return state;
    }

}
