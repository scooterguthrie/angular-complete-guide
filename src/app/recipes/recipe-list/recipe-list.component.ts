import { Component, OnInit } from '@angular/core';
import { Recipe } from'../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
