import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/services/recipe-service.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService,
    private authService: AuthService) {
  }

  storeRecipes() {
    return this.httpClient.put('https://ng-recipe-book-store.firebaseio.com/recipes.json?auth='
      + this.authService.getToken(), this.recipeService.getRecipes());
  }

  retrieveRecipes() {
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-store.firebaseio.com/recipes.json?auth='
                  + this.authService.getToken(), {
                    observe: 'body',
                    responseType: 'json'
                  })
      .map(
        (recipes) => {
          console.log(recipes);
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }

          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
