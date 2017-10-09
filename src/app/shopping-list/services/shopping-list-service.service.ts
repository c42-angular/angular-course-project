import { Ingredient } from '../../shared/ingredient.model';
import { Output, EventEmitter } from '@angular/core';

export class ShoppingListService {
    @Output() ingredientAdded = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Chilles', 10)
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredientAdded.emit(this.getIngredients());
      }

      addIngredients(ingredients: Ingredient[]) {
          this.ingredients.push(...ingredients);
          this.ingredientAdded.emit(this.getIngredients());
      }
}
