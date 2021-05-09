export const SET_MEAL = "SET_MEAL";
export const RESET_MEALS = "RESET_MEALS";

export const initialState = {
  Monday: new Array<number>(2),
  Tuesday: new Array<number>(2),
  Wednesday: new Array<number>(2),
  Thursday: new Array<number>(2),
  Friday: new Array<number>(2),
  Saturday: new Array<number>(2),
  Sunday: new Array<number>(2),
};

export const mealPlannerReducer = (state, action) => {
  switch (action.type) {
    case SET_MEAL:
      const mealsPerDay = { ...state };
      Object.keys(mealsPerDay).find((day) => {
        if (day === action.payload.day.day) {
          if (action.payload.day.typeOfMeal === "Lunch") {
            mealsPerDay[day].splice(0, 2, action.payload.meal);
          }
          if (action.payload.day.typeOfMeal === "Dinner") {
            mealsPerDay[day].splice(1, 2, action.payload.meal);
          }
        }
      });
      return { ...mealsPerDay };
    case RESET_MEALS:
      return { ...initialState };
    default:
      return state;
  }
};
