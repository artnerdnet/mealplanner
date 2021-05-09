const CategoryTag: React.FC<{ category: string; color: string }> = ({
  category,
  color,
}) => {
  return (
    <div
      className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 text-black-700 rounded-full bg-${color}-200`}
    >
      {category}
    </div>
  );
};

export default CategoryTag;
