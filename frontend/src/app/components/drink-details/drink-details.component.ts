import { Component, OnInit, Input } from '@angular/core';
import { DrinkService } from '../../services/drink.service';
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
  message = '';

  constructor(
    private drinkService: DrinkService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(!this.viewMode){
      this.message = '';
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

}
