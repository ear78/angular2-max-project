import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a description for testing', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEOhGKKoj_JHTNwCZLQHx42AS-mvCvWo0FINn5IjkLT2sjHvp')
  ];

  constructor() { }

  ngOnInit() {
  }

}
