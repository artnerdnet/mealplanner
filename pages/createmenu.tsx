import DishCard from "../components/DishCard";
import { NextPage } from "next";
import {
  SET_MEAL,
  RESET_MEALS,
  mealPlannerReducer,
  initialState,
} from "../reducers/mealPlanner.reducer";
import { IMeal, ISelectedDay } from "../types/types";
import { useReducer, useState } from "react";
import Catalogue from "../components/Catalogue";
import Modal from "../components/Modal";
import Header from "../components/Header";
import MealListing from "../components/MealListing";

const CreateMenu: NextPage = () => {
  const [mealPlanner, dispatch] = useReducer(mealPlannerReducer, initialState);
  const [selectedDay, setSelectedDay] = useState<ISelectedDay | null>(null);
  const [selectingMeal, setSelectingMeal] = useState<boolean>(false);

  const handleMealSelection = (meal: IMeal) => {
    setSelectingMeal(false);
    dispatch({
      type: SET_MEAL,
      payload: {
        day: selectedDay,
        meal,
      },
    });
  };

  const handleResetMeals = () => {
    dispatch({
      type: RESET_MEALS,
    });
  };

  const selectMealHandler = (day: string, typeOfMeal: string) => {
    setSelectedDay({ day: day, typeOfMeal: typeOfMeal });
    setSelectingMeal(!selectingMeal);
  };

  return (
    <>
      {selectedDay && (
        <Modal isOpen={selectingMeal ? true : false}>
          <Catalogue
            typeOfMeal={selectedDay.typeOfMeal}
            meals={meals}
            onClickHandler={handleMealSelection}
          />
        </Modal>
      )}
      <Header title="Select your meals" buttonLink="/" buttonTitle="Go back" />
      <MealListing clickHandler={selectMealHandler} meals={mealPlanner} />
    </>
  );
};

export default CreateMenu;

const meals = {
  Lunch: [
    {
      Name: "First Course for meal 0 on day 0",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "Main Course for meal 0 on day 0",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "First Course for meal 0 on day 1",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "Main Course for meal 0 on day 1",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "First Course for meal 0 on day 2",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "Main Course for meal 0 on day 2",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "First Course for meal 0 on day 3",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "Main Course for meal 0 on day 3",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "First Course for meal 0 on day 4",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "Main Course for meal 0 on day 4",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "First Course for meal 0 on day 5",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "Main Course for meal 0 on day 5",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "First Course for meal 0 on day 6",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "Main Course for meal 0 on day 6",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
  ],
  Dinner: [
    {
      Name: "First Course for meal 1 on day 0",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "Main Course for meal 1 on day 0",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "First Course for meal 1 on day 1",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "Main Course for meal 1 on day 1",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "First Course for meal 1 on day 2",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "Main Course for meal 1 on day 2",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "First Course for meal 1 on day 3",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "Main Course for meal 1 on day 3",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "First Course for meal 1 on day 4",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "Main Course for meal 1 on day 4",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "First Course for meal 1 on day 5",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "Main Course for meal 1 on day 5",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "First Course for meal 1 on day 6",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
    {
      Name: "Main Course for meal 1 on day 6",
      Category: "vegetable",
      Image: "https://source.unsplash.com/600x600/?food",
    },
  ],
};
