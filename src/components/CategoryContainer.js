import React from "react";
import Category from "./Category";

const CategoryContainer = () => {
  const catArr = [
    "All",
    "Camera lens",
    "Apple",
    "Music",
    "Spring framework",
    "Motovlogs",
    "Podcasts",
    "Train stations",
    "Conputer programming",
  ];
  return (
    <div>
      {catArr.map((e) => (
        <Category key={e} name={e} />
      ))}
    </div>
  );
};

export default CategoryContainer;
