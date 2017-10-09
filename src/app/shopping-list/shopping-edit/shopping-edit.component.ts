import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') formObject: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  OnAdd() {
    console.log('OnAdd() called');
    console.log(this.formObject);

    const ingdtName = this.formObject.value.name;
    const ingdtAmount = Number(this.formObject.value.amount);
    const ingredient =  new Ingredient(ingdtName, ingdtAmount);

    this.shoppingListService.addIngredient(ingredient);

    console.log('Name: %s; Amount: %d', ingredient.name, ingredient.amount);
  }
}
