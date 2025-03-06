"use client";
import React, { useState } from "react";
import Image from "next/image";
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
    <div className="bg-blue-100">
      <div className="p-6 w-full lg:px-16">
        <div className="flex items-center space-x-2 mb-4 lg:justify-center">
          <div className="flex items-center px-4 py-2 rounded-lg border border-black">
            <Image src="/heart.png" alt="icon" width={24} height={24} />
            <p className="text-sm text-gray-500 ml-2">Bức tường tình yêu</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 mb-4 px-4 lg:justify-center">
        <h2 className="text-2xl font-bold text-gray-950">
          Những câu chuyện thành công!
        </h2>
      </div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_2fr] mx-auto max-w-6xl px-6 gap-6">
        <div className="w-full">
          <h3 className="text-lg font-bold text-gray-950 mb-3">
            Danh sách phát: {videos.length} Videos
          </h3>
          <div className="flex lg:block space-y-3 overflow-x-auto flex-nowrap scrollbar-hide">
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition shrink-0 w-[100px] lg:w-[200px]"
                onClick={() => setSelectedVideo(video.videoUrl)}
              >
                <div className="relative w-16 h-10">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full rounded-md object-cover"
                  />
                  <span className="absolute bottom-1 right-1 bg-black text-white text-xs px-1 rounded">
                    {video.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-700 truncate sm:block hidden">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Video chính */}
        <div className="w-full md:max-w-[720px] mx-auto">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={selectedVideo}
              title="YouTube Video Player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlaylist;
