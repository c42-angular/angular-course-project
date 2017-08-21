import { Recipe } from "../recipe.model";
import { Output, EventEmitter } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe', 
            'Recipe description goes here',
          'http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-' +
            'chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg',
            [
                new Ingredient('Cinnamon', 5),
                new Ingredient('Garlic', 10)
              ]
        ),
        new Recipe(
            'A test recipe 2', 
            'Recipe description 2 goes here',
          'https://www.bbcgoodfood.com/sites/default/files/styles/top_recipe_collection/' +
          'public/recipe-collections/collection-image/2013/05/rack-of-venison-roasted-carrots-and-forager-sauce.jpg?itok=vVcfEX9K',
          [
            new Ingredient('Carrots', 5),
            new Ingredient('Meat', 1)
          ])
      ];

      @Output() recipeSelected = new EventEmitter<Recipe>();
      getRecipes(){
          // return a copy of the array to keep data secure
          return this.recipes.slice();
      }

      onRecipeSelected(recipe: Recipe) {
          this.recipeSelected.emit(recipe);
      }
}