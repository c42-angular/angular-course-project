import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() onRecipeClicked = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    console.log('recipe-item clicked');
    this.onRecipeClicked.emit(this.recipe);
  }
}
