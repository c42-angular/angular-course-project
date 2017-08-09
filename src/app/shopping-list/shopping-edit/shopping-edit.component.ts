import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputElement: ElementRef;
  @ViewChild('amountInput') amountInputElement: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  OnAdd() {
    console.log('OnAdd() called');
    const ingdtName = (<HTMLInputElement>this.nameInputElement.nativeElement).value;
    const ingdtAmount = Number((<HTMLInputElement>this.amountInputElement.nativeElement).value);
    const ingredient =  new Ingredient(ingdtName, ingdtAmount);
    this.ingredientAdded.emit(ingredient);
    console.log('Name: %s; Amount: %d', ingredient.name, ingredient.amount);
  }
}
