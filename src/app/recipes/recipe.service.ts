import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Biryani',
      'Tasty Hyderabadi Dum Biryani ',
      'https://i.ndtvimg.com/i/2016-06/biryani_625x350_71466587867.jpg',
      [
        new Ingredient('Chicken', 3),
        new Ingredient('Rice', 2)
      ]),
    new Recipe('Mutton Biryani',
      'Tasty Hyderabadi Mutton Dum Biryani ',
      'https://www.sanjayhumania.com/wp-content/uploads/2017/06/best-biryani-restaurants-in-bangalore.jpg',
      [
        new Ingredient('Mutton', 6),
        new Ingredient('Basmati Rice', 5)
      ])
  ];

  constructor(private slService: ShoppingListService ) {}
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
