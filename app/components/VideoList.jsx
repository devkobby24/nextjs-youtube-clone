import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));

  return (
    <div className="grid grid-cols-1 gap-8">
      {listOfVideos}
    </div>
  );
};

export default VideoList;
