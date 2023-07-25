import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Drink } from '../../../../../backend/models/drink.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  items : Drink[] = [];
  totalPrice : number = 0;

  constructor(
    private cartService: CartService,
  ) { 
    this.items = cartService.getItems();
    this.totalPrice = cartService.getTotalPrice();
  }

  clearCart() : void {
    this.items = this.cartService.clearCart();
    this.totalPrice = 0;
  }

}
