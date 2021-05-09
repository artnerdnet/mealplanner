import { useReducer } from "react";
export const GET_MEALS = "GET_MEALS";

export const initialState = [
  { name: "pizza", category: "carbs" },
  { name: "chicken wings", category: "meat" },
];

const mealsReducer = (state, action) => {
  switch (action.type) {
    case "GET_MEALS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const [meals, dispatch] = useReducer(mealsReducer, initialState);
