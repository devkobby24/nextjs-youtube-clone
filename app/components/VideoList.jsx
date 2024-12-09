import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));

  return (
    
    videos&&<div className="mt-10">
      <h2 className="font-bold text-2xl">Suggested Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
        {listOfVideos}
      </div>
    </div>
  );
};

export default VideoList;
