import DishCard from "../components/DishCard";
import Header from "../components/Header";
import { NextPage } from "next";
import MealListing from "../components/MealListing";
import {
  initialState,
  mealPlannerReducer,
} from "../reducers/mealPlanner.reducer";
import { useReducer } from "react";
import Navigation from "../components/Navigation";
// import { useEffect, useState } from "react";
// import { dispatch, SET_MEAL } from "../reducers/mealPlanner.reducer";
// import Catalogue from "../components/Catalogue";
// import { IMeal, ISelectedDay } from "../types/types";

const Main: NextPage<{ data: any }> = ({ data }) => {
  const [mealPlanner] = useReducer(mealPlannerReducer, initialState);

  return (
    <>
      <Navigation />
      <Header
        title={"Your menu for this week"}
        buttonTitle={"Create your plan"}
        buttonLink={"/createmenu"}
      />
      <MealListing meals={mealPlanner} />
    </>
  );
};

export async function getStaticProps(context) {
  // const res = await fetch(`https://menu-tan.vercel.app/api/menu/new`);
  // const data = await res.json();
  // console.log(data, "data");

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      data: {
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
      },
    },
    // props: { data }, // will be passed to the page component as props
  };
}

export default Main;

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
