import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DrinkService } from '../../services/drink.service';
import { CartService } from '../../services/cart.service';

import { Drink } from '../../../../../backend/models/drink.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.css']
})
export class DrinkDetailsComponent implements OnInit {
  @Input() viewMode: boolean = false;

  @Input() currentDrink: Drink = {
    name: '',
    price: 0,
    featured: false,
    life_effect: 0,
    tags: [],
  };
  @Output() sender = new EventEmitter();

  constructor(
    private drinkService: DrinkService, 
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    if(!this.viewMode){
      this.getDrink(this.route.snapshot.params['id']);
    }
  }

  getDrink(id: number): void {
    this.drinkService.findById(id)
      .subscribe({
        next: data => {
          this.currentDrink = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  addToCart(drink: Drink) : void {
    this.cartService.addToCart(drink);
    console.log(this.cartService.getItems())
    this.sender.emit(true);
    // window.alert(`${this.currentDrink.name} has been added to the cart!`);
  }

  closeAlert() : void {
    this.sender.emit(false);
  }
}
