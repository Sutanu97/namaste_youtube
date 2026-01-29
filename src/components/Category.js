import React from "react";

const Category = ({ name }) => {
  return (
    <button className="rounded-lg mr-6 px-3 py-1 bg-gray-100 cursor-pointer text-black">
      {name}
    </button>
  );
};

export default Category;
