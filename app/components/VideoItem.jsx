import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image"; // You can use your custom Image component

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div>
      <Card
        className="cursor-pointer flex flex-col items-center shadow-md hover:shadow-xl max-w-[400px]"
        onClick={() => onVideoSelect(video)}
      >
        <Image
          alt="thumbnail"
          src={video?.snippet?.thumbnails?.high.url}
          className="rounded-t-lg md:w-[400px] w-full h-auto object-cover"
          height={200}
          width={400}
        />
        <CardContent className="p-0">
          <CardHeader className="py-3 ml-0">
            <CardTitle className="text-base flex font-semibold p-0">
              <span>{video?.snippet?.title}<span className="text-gray-500"> - {video?.snippet?.channelTitle}</span></span>
            </CardTitle>
            
          </CardHeader>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoItem;
