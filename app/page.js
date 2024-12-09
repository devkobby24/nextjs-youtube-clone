"use client";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetails";
import youtube from "./api/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleSubmit = async (searchTerm) => {
    try {
      const response = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY, // Secure the API key
          q: searchTerm,
        },
      });

      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-5">
      <div>
        <SearchBar onFormSubmit={handleSubmit} />
      </div>
      <div>
        <div>
          <VideoDetail video={selectedVideo} />
        </div>
        <div>
          <VideoList videos={videos} onVideoSelect={onVideoSelect} />
        </div>
      </div>
    </div>
  );
};

export default App;
