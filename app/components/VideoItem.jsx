import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image"; // You can use your custom Image component

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div>
      <Card
        className="cursor-pointer flex flex-col items-center shadow-lg hover:shadow-lg"
        onClick={() => onVideoSelect(video)}
      >
        <Image
          alt="thumbnail"
          src={video?.snippet?.thumbnails?.medium.url}
          className="rounded-t-lg md:w-[400px] w-full h-[200px] object-fit"
          height={400}
          width={200}
        />
        <CardContent className="">
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
