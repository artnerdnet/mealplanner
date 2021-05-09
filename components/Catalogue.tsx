import Link from "next/link";
import { IMeal, IMeals, ISelectedDay } from "../types/types";
import DishCard from "./DishCard";

const Catalogue: React.FC<{
  typeOfMeal: string;
  meals: IMeals;
  onClickHandler: (meal: IMeal) => void;
}> = ({ typeOfMeal, meals, onClickHandler }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div>
        <p className="text-xl font-semibold text-center my-2">
          {typeOfMeal} Suggestions
        </p>
        {meals[typeOfMeal] && (
          <div className="grid lg:grid-cols-7 grid-cols-1 gap-4">
            {meals[typeOfMeal].map((item, index) => {
              return (
                <div className="m-2" key={index}>
                  <DishCard
                    title={item.Name}
                    imgSrc={item.Image}
                    category={item.Category}
                    onClickHandler={() => onClickHandler(item)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Catalogue;
