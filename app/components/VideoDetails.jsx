import React from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

const VideoDetail = ({ video }) => {
  if (!video) return <p className="text-lg">Loading...</p>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      {/* Video Player */}
      <Card className="h-[70%]">
        <iframe
          className="w-full h-full"
          title="Video Player"
          src={videoSrc}
        />
      </Card>

      {/* Video Details */}
      <Card className="p-4 mt-4 shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold italic">
            {video?.snippet?.title} - {video?.snippet?.channelTitle}
          </CardTitle>
          <CardDescription className="text-gray-500">
            {video?.snippet?.channelTitle}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base">{video?.snippet?.description}</p>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoDetail;
