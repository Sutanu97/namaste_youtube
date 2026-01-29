import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div className="w-[29%] mr-12 my-3">
      <Link to={"/watch?v=" + video.id}>
        <img
          alt="video card"
          src={video?.snippet?.thumbnails?.medium?.url}
          className="rounded-xl"
        ></img>
      </Link>
      <div className="font-bold">{video?.snippet?.title}</div>
      <p>{video?.snippet?.channelTitle}</p>
      {/* <span>
        {video?.statistics?.viewCount} views <span className="mx-1">•</span>
        {agoTime}
      </span> */}
    </div>
  );
};

export default VideoCard;
