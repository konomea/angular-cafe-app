import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from '../../models/drink.model.js';

const baseURl = 'http://localhost:8080/api/drinks';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Drink[]> {
    return this.http.get<Drink[]>(baseURl);
  }

  findByName(name: string): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${baseURl}?name=${name}`);
  }

  findFeatured(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`${baseURl}?featured=true`);
  }
}
