import React, { useEffect, useState } from "react";
import { VIDEOS_LIST_URL } from "../utilities/Constants";
import VideoCard from "./VideoCard";

const VideoCardsContainer = () => {
  const [videos, setVideos] = useState({});

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(VIDEOS_LIST_URL);
    const json = await data.json();
    console.log(json);
    setVideos(json);
  };

  if (!videos) return;

  return (
    <div className="mt-7 flex flex-wrap">
      {videos?.items?.map((e) => (
        <VideoCard key={e.id} video={e} />
      ))}
    </div>
  );
};

export default VideoCardsContainer;
