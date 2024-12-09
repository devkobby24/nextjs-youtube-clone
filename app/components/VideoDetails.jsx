import React from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

const VideoDetail = ({ video }) => {
  if (!video) return <p className="text-lg text-center">Key in your search term to view the videos</p>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      {/* Video Details */}
      <Card className=" mt-4 shadow-md">
      <iframe
          className="rounded-t-lg w-full h-[400px] md:h-[500px] object-cover"
          title="Video Player"
          src={videoSrc}
        />
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {video?.snippet?.title}
          </CardTitle>
          <CardDescription className="text-gray-500">
            {video?.snippet?.channelTitle}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base">{video?.snippet?.description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoDetail;
