import { Output, EventEmitter, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list-service.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[];
      // = [
      //   new Recipe(
      //       'A test recipe',
      //       'Recipe description goes here',
      //     'http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-' +
      //       'chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg',
      //       [
      //           new Ingredient('Cinnamon', 5),
      //           new Ingredient('Garlic', 10)
      //         ]
      //   ),
      //   new Recipe(
      //       'A test recipe 2',
      //       'Recipe description 2 goes here',
      //     'https://www.bbcgoodfood.com/sites/default/files/styles/top_recipe_collection/' +
      //     'public/recipe-collections/collection-image/2013/05/rack-of-venison-roasted-carrots-and-forager-sauce.jpg?itok=vVcfEX9K',
      //     [
      //       new Ingredient('Carrots', 5),
      //       new Ingredient('Meat', 1)
      //     ])
      // ];

      constructor(private shoppingListService: ShoppingListService, private http: Http) {
      }

      recipeChanged = new Subject <Recipe[]>();

      getRecipes() {
          // return a copy of the array to keep data secure
          // return this.recipes.slice();
          if (this.recipes === null) {
          this.http.get('https://ng-recipe-book-store.firebaseio.com/recipes.json')
          .subscribe(
            (response: Response) => this.recipes = response.json(),
            (error: Error) => console.log(error)
          );
        }

        return this.recipes;
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.http.put('https://ng-recipe-book-store.firebaseio.com/recipes.json', this.recipes)
          .subscribe(
              (response: Response) => console.log(response),
              (error: Error) => console.log(error)
          );
        this.recipeChanged.next(this.getRecipes());
      }

      updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.getRecipes());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.getRecipes());
      }

      addToShoppingList(recipe: Recipe) {
          this.shoppingListService.addIngredients(recipe.ingredients);
      }
}
