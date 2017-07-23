import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Recipe description goes here',
      'http://www.seriouseats.com/recipes/assets_c/2015/12/20151218-braised-' +
        'chicken-thigh-cabbage-pancetta-recipe-kenji-14-thumb-1500xauto-428923.jpg'),
    new Recipe('A test recipe 2', 'Recipe description 2 goes here',
      'https://www.bbcgoodfood.com/sites/default/files/styles/top_recipe_collection/' +
      'public/recipe-collections/collection-image/2013/05/rack-of-venison-roasted-carrots-and-forager-sauce.jpg?itok=vVcfEX9K')
  ];

  constructor() { }

  ngOnInit() {
  }
}
