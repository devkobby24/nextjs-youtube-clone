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
          <CardHeader className="p-3">
            <CardTitle className="text-base font-semibold p-0">
              {video?.snippet?.title}
            </CardTitle>
          </CardHeader>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoItem;
