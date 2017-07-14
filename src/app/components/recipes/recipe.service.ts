import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a description for testing', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEOhGKKoj_JHTNwCZLQHx42AS-mvCvWo0FINn5IjkLT2sjHvp'),
    new Recipe('A Another recipe', 'this is a description for test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72WN0zSQ9mx51ea_2YZHC_2o3wGrqiqunefokoYind-ewxsODYg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
