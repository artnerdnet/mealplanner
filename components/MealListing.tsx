import DishCard from "./DishCard";
import { NextPage } from "next";

interface Props {
  meals: string[];
  clickHandler?: (day: string, typeOfMeal: string) => void;
}

const MealListing: NextPage<Props> = ({ meals, clickHandler }) => {
  const onCardClick = (day: string, typeOfMeal: string) => {
    if (clickHandler) {
      clickHandler(day, typeOfMeal);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-8xl bg-gray-50 w-screen h-screen rounded-lg shadow-xl">
          <div className="grid lg:grid-cols-7 grid-cols-1 gap-4">
            {Object.keys(meals).map((day, index) => {
              return (
                <div className="m-2 max-h-1/2" key={index}>
                  <h3 className="text-2xl">{day}</h3>
                  <DishCard
                    title={meals[day][0] ? meals[day][0].Name : null}
                    category={meals[day][0] ? meals[day][0].Category : null}
                    imgSrc={meals[day][0] ? meals[day][0].Image : null}
                    onClickHandler={
                      clickHandler !== undefined
                        ? () => {
                            onCardClick(day, "Lunch");
                          }
                        : null
                    }
                  />
                  <DishCard
                    title={meals[day][1] ? meals[day][1].Name : null}
                    category={meals[day][1] ? meals[day][1].Category : null}
                    imgSrc={meals[day][1] ? meals[day][1].Image : null}
                    onClickHandler={
                      clickHandler !== undefined
                        ? () => {
                            onCardClick(day, "Dinner");
                          }
                        : null
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MealListing;
