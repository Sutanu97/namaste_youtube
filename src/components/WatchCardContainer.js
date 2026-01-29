import React, { useEffect, useState } from "react";
import WatchCard from "./WatchCard";
import { VIDEOS_LIST_WITH_KEYWORD_URL } from "../utilities/Constants";
import { useSearchParams } from "react-router-dom";

const WatchCardContainer = () => {
  const [videos, setVideos] = useState([]);

  const currentSearchText = useSearchParams()[0];
  const fetchVideosUsingSearchKey = async () => {
    console.log(
      "searching for currentSearchText",
      currentSearchText.toString().split("=")[1]
    );
    const data = await fetch(
      VIDEOS_LIST_WITH_KEYWORD_URL + currentSearchText.toString().split("=")[1]
    );

    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };

  useEffect(() => {
    fetchVideosUsingSearchKey();
  }, [currentSearchText]);

  return (
    <div>
      {videos.map((v) => (
        <WatchCard key={v?.id?.videoId} video={v} />
      ))}
    </div>
  );
};

export default WatchCardContainer;
