import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
interface Cocktail {
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor( private http:HttpClient) { }
  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("assets/cocktails.json");
  }
}
