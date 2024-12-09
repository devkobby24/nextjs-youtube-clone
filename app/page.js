"use client";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetails";
import youtube from "./api/youtube";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
          maxResults: 6,
          key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY, // Secure the API key
          q: searchTerm,
        },
      });
      console.log(response.data.items);
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <>
    <Header />
    <div className="flex flex-col justify-center items-center gap-4 p-5 lg:mx-40 min-h-[90vh]">
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
    <Footer />
    </>
  );
};

export default App;
