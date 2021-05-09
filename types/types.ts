export interface IMeal {
  Name: string;
  Category: string;
  Image: string;
}

export interface IMeals {
  Lunch: IMeal[];
  Dinner: IMeal[];
}

export interface ISelectedDay {
  day: string;
  typeOfMeal: string;
}
