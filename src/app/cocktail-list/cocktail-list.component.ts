import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { CommonModule, NgFor } from '@angular/common';
interface Cocktail {
  name: string;
  price: number;
  image: string;
}
@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent implements OnInit{

  cocktails: Cocktail[] = [];
  constructor(private cocktailService: CocktailService) { }
  ngOnInit() {
    this.cocktailService.getCocktails().subscribe(cocktails => this.cocktails = cocktails);
  }

}
