"use client";
import React, { useState } from "react";
import Image from "next/image";
import Headline from "@/componnents/headline";
const videos = [
  {
    id: "1",
    title: "Kết quả bất ngờ của Hiền Tài...",
    thumbnail: "https://i.ytimg.com/vi/CL13X-8o4h0/maxresdefault.jpg",
    duration: "23:45",
    videoUrl: "https://www.youtube.com/embed/jfpQHBsPzkU",
  },
  {
    id: "2",
    title: "Kết quả bất ngờ của Hiền Tài...",
    thumbnail: "https://i.ytimg.com/vi/CL13X-8o4h0/maxresdefault.jpg",
    duration: "23:45",
    videoUrl: "https://www.youtube.com/watch?v=jfpQHBsPzkU",
  },
  {
    id: "3",
    title: "Kết quả bất ngờ của Hiền Tài...",
    thumbnail: "https://i.ytimg.com/vi/CL13X-8o4h0/maxresdefault.jpg",
    duration: "23:45",
    videoUrl: "https://www.youtube.com/watch?v=jfpQHBsPzkU",
  },
  {
    id: "4",
    title: "Kết quả bất ngờ của Hiền Tài...",
    thumbnail: "https://i.ytimg.com/vi/CL13X-8o4h0/maxresdefault.jpg",
    duration: "23:45",
    videoUrl: "https://www.youtube.com/watch?v=jfpQHBsPzkU",
  },
  {
    id: "5",
    title: "Kết quả bất ngờ của Hiền Tài...",
    thumbnail: "https://i.ytimg.com/vi/CL13X-8o4h0/maxresdefault.jpg",
    duration: "23:45",
    videoUrl: "https://www.youtube.com/watch?v=jfpQHBsPzkU",
  },
];

const VideoPlaylist = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0].videoUrl);

  return (
    <div className="  w-full flex flex-col py-[2rem] gap-[2rem] bg-linear ">
      <div className=" w-full flex flex-col items-left md:items-center md:justify-center md:gap-[1.5rem]  gap-[1rem]  ">
        <Headline title="Bức tường tình yêu" src="icons/heart.png" titleHeading="Những câu chuyện thành công!" />
      </div>

      <div className="w-full flex flex-col items-center gap-[1.5rem] justify-center mx-auto grid-container">
        <div className="flex flex-col-reverse md:flex-row w-full px-6 gap-6">
          <div className="w-full md:w-4/12">
            <h3 className="text-lg font-bold text-gray-950 mb-3">Danh sách phát: {videos.length} Videos</h3>
            <div className="flex flex-row md:flex-col space-y-0 md:space-y-3 overflow-x-auto md:overflow-x-visible flex-nowrap scrollbar-hide">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition shrink-0  md:w-full"
                  onClick={() => setSelectedVideo(video.videoUrl)}
                >
                  <div className="relative w-16 h-10">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full rounded-md object-cover" />
                    <span className="absolute bottom-1 right-1 bg-black text-white text-xs px-1 rounded">{video.duration}</span>
                  </div>
                  <p className="md:block hidden text-sm text-gray-700 truncate">{video.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-8/12">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe className="absolute top-0 left-0 w-full h-full" src={selectedVideo} title="YouTube Video Player" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlaylist;
