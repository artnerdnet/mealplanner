const getCategoryColor = (category: string) => {
  switch (category) {
    case "vegetable":
      return "green";
    case "meat":
      return "red";
    case "carbs":
      return "yellow";
    default:
      return "grey";
  }
};

export default getCategoryColor;
