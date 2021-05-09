import getCategoryColor from "../helpers/getCategoryColor";
import CategoryTag from "./CategoryTag";

const DishCard: React.FC<{
  title?: string;
  imgSrc?: string;
  category?: string;
  onClickHandler?: () => void;
}> = ({ title, imgSrc, category, onClickHandler }) => {
  return (
    <div
      className="relative bg-white py-4 px-4 rounded-3xl h-full w-45 my-2 shadow-xl"
      onClick={onClickHandler}
    >
      <div className="flex items-center content-center justify-center">
        {imgSrc ? (
          <img
            className="w-32 h-32 rounded-full"
            src={imgSrc}
            alt=""
            width="384"
            height="512"
          />
        ) : (
          <div
            className={`${
              onClickHandler !== null && "cursor-pointer"
            } w-32 h-32 rounded-full bg-gray-200 flex justify-center items-center`}
          >
            <p className="text-xl">{onClickHandler !== null && "+"}</p>
          </div>
        )}
      </div>
      {title ? (
        <div className="mt-8">
          <p className="text-l font-semibold text-center my-2">{title}</p>
          <div className="border-t-2"></div>
          <div className="flex justify-between">
            <div className="my-2">
              <div className="flex space-x-2">
                {category && (
                  <CategoryTag
                    color={getCategoryColor(category)}
                    category={category}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8 h-25">
          {onClickHandler !== null ? (
            <p className="text-xl cursor-pointer font-semibold text-center my-2">
              Click to select a meal
            </p>
          ) : (
            <p className="text-xl font-semibold text-center my-2">
              No dish selected
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default DishCard;
