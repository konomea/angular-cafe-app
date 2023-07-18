import { Injectable } from '@angular/core';
import { Drink } from '../../../../backend/models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Drink[] = [];

  constructor() { }

  addToCart(drink: Drink) : void {
    this.items.push(drink);
  }

  getItems() : Drink[] {
    return this.items
  }

  clearCart() : Drink[] {
    this.items = [];
    return this.items;
  }
}
