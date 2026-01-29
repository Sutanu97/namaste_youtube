import React from "react";
import { Link } from "react-router-dom";

const WatchCard = ({ video }) => {
  const getAgoTime = (diff) => {
    let sdiff = (diff /= 1000);
    if (sdiff >= 365 * 86400) {
      return Math.floor(sdiff / (365 * 86400)) + " year(s) ago";
    }
    if (sdiff >= 30 * 86400) {
      return Math.floor(sdiff / (30 * 86400)) + " month(s) ago";
    }
    if (sdiff >= 86400) {
      return Math.floor(sdiff / 86400) + " day(s) ago";
    }
    if (sdiff >= 3600) {
      return Math.floor(sdiff / 3600) + " hour(s) ago";
    }
    if (sdiff >= 60) {
      return Math.floor(sdiff / 60) + " minutes(s) ago";
    }
    return "just now";
  };
  const publishedAt = new Date(video?.snippet?.publishedAt);
  const current = new Date();
  const agoTime = getAgoTime(current - publishedAt);
  return (
    <div className="w-full h-[300px] mb-16 flex">
      <div className="w-[40%] pr-4">
        <Link to={"/watch?v=" + video?.id?.videoId}>
          <img
            className="h-[20rem]"
            src={video?.snippet?.thumbnails?.high?.url}
          ></img>
        </Link>
      </div>
      <div className="">
        <div>
          <div className="font-bold">{video?.snippet?.title}</div>
          <div>
            <span>
              {video?.statistics?.viewCount} views{" "}
              <span className="mx-1">•</span>
              {agoTime}
            </span>
          </div>
        </div>
        <div className="mt-4 text-sm font-semibold">
          {video?.snippet.channelTitle}
        </div>
        <div className="mt-4 text-sm">
          {video?.snippet.description.substring(0, 100)}
        </div>
      </div>
    </div>
  );
};

export default WatchCard;
