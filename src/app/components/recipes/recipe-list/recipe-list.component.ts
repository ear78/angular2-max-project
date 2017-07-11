import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a description for testing', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEOhGKKoj_JHTNwCZLQHx42AS-mvCvWo0FINn5IjkLT2sjHvp'),
    new Recipe('A Another recipe', 'this is a description for test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72WN0zSQ9mx51ea_2YZHC_2o3wGrqiqunefokoYind-ewxsODYg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
