import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeService } from '../recipes/services/recipe-service.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {
  }

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-store.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  retrieveRecipes() {
    this.http.get('https://ng-recipe-book-store.firebaseio.com/recipes.json')
      .subscribe(
        (response: Response) => {
          const recipes = response.json();
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
