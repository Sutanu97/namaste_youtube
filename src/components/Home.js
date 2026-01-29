import React from "react";
import CategoryContainer from "./CategoryContainer";
import VideoCardsContainer from "./VideoCardsContainer";

const Home = () => {
  return (
    <div className="pt-3 w-[85%]">
      <CategoryContainer />
      <VideoCardsContainer />
    </div>
  );
};

export default Home;
