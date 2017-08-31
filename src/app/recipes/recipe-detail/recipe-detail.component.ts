import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from "../services/recipe-service.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (p: Params) => {
        const recipeName = p["name"];
        this.selectedRecipe = this.recipeService.getRecipes().find(
          (r: Recipe) => {
            return r.name === recipeName;
          }
        );
        console.log(':id is --', p['name']);
      }
    );
  }

  addRecipeToShoppingList(){
    this.recipeService.addToShoppingList(this.selectedRecipe);
  }
}
