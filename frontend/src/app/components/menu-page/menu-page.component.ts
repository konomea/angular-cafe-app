import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../../services/drink.service';
import { Drink } from '../../../models/drink.model';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  
  drinks?: Drink[];
  errorMessage: string = '';
  currentDrink: Drink = {};
  currentIndex = -1;
  name = '';

  constructor(private drinkService: DrinkService) { }

  ngOnInit(): void {
    this.retrieveDrinks();
  }

  retrieveDrinks(): void {
    this.drinkService.getAll().subscribe({
      next: data => {
        this.drinks = data;
        console.log(data);
      },
      error : err => this.errorMessage = err
      });
  }

  refreshList(): void {
    this.retrieveDrinks();
    this.currentDrink = {};
    this.currentIndex = -1;
  }

  setActiveDrink(drink: Drink, index: number): void {
    this.currentDrink = drink;
    this.currentIndex = index;
  }

  searchName(): void {
    this.currentDrink = {};
    this.currentIndex = -1;

    this.drinkService.findByName(this.name).subscribe(
      data => {
        this.drinks = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}

