import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image"; // You can use your custom Image component

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="mb-10">
      <Card
        className="cursor-pointer flex items-center shadow-md hover:shadow-lg"
        onClick={() => onVideoSelect(video)}
      >
        <Image
          alt="thumbnail"
          src={video?.snippet?.thumbnails?.medium.url}
          className="mr-5 w-32 h-20 object-cover"
          height={80}
          width={128}
        />
        <CardContent className="p-3">
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              {video?.snippet?.title}
            </CardTitle>
          </CardHeader>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoItem;
