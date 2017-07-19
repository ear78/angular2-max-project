import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a description for testing', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEOhGKKoj_JHTNwCZLQHx42AS-mvCvWo0FINn5IjkLT2sjHvp', [
      new Ingredient('test 1', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('A Another recipe', 'this is a description for test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72WN0zSQ9mx51ea_2YZHC_2o3wGrqiqunefokoYind-ewxsODYg', [
      new Ingredient('test 2', 2),
      new Ingredient('French Hamburgers', 2)
    ])
  ];

  constructor(private slService: ShoppingListService){

  }
  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
