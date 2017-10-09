import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  OnAdd(formObject: NgForm) {
    console.log(formObject);

    const formValue = formObject.value;
    const ingredient =  new Ingredient(formValue.name, formValue.amount);

    this.shoppingListService.addIngredient(ingredient);

    console.log('Name: %s; Amount: %d', ingredient.name, ingredient.amount);
  }
}
