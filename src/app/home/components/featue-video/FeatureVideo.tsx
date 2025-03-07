import Head from "next/head";
import ItemFeature from "./item-feature";
import Headline from "../../../../componnents/headline";

export default function FeatureVideo() {
  const videos = [
    { src: "https://www.youtube.com/embed/ObPxP2WNKS8", title: "Kết quả bất ngờ của Hiền Tài", duration: "23:45" },
    { src: "https://www.youtube.com/embed/ObPxP2WNKS8", title: "Kết quả bất ngờ của Hiền Tài", duration: "23:45" },
    { src: "https://www.youtube.com/embed/ObPxP2WNKS8", title: "Kết quả bất ngờ của Hiền Tài", duration: "23:45" },
    { src: "https://www.youtube.com/embed/ObPxP2WNKS8", title: "Kết quả bất ngờ của Hiền Tài", duration: "23:45" },
    { src: "https://www.youtube.com/embed/ObPxP2WNKS8", title: "Kết quả bất ngờ của Hiền Tài", duration: "23:45" },
    { src: "https://www.youtube.com/embed/ObPxP2WNKS8", title: "Kết quả bất ngờ của Hiền Tài", duration: "23:45" },
  ];

  return (
    <div className="w-full flex flex-col mx-auto pt-[2rem] md:gap-[2rem] gap-[1rem]">
      <div className="w-full flex flex-col md:items-center md:justify-center gap-[1rem] md:md:gap-[1.5rem] gap-[1rem]   grid-container mx-auto">
        <Headline title="Thành tựu" src="icons/feature.png" titleHeading="Thành tựu nổi bật của chúng tôi" />

        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-6 gap-[1rem] w-full">
          <ItemFeature src="icons/player.svg" value="30" description="Tuyển thủ quốc gia" />
          <ItemFeature src="icons/brain.svg" value="7" description="Thí sinh siêu trí tuệ" />
          <ItemFeature src="icons/education.svg" value="20,000" description=" Học viên trên khắp cả nước" />
          <ItemFeature src="icons/award.svg" value="30" description="Bằng khen thành tích" />
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-6 mt-[1.875rem] p-[2rem] bg-[#F2F2F2] rounded-[1.5rem] shadow-lg grid-container mx-auto">
        <div className="lg:w-2/3 rounded-[1.5rem] flex flex-col">
          <div className="relative p-[1.25rem] bg-white w-full h-full rounded-[1.5rem] overflow-hidden shadow-lg">
            <img className="w-full h-full" src="feature/bg-video.png"></img>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[4.625rem] h-[4.625rem] backdrop-blur-[0.25rem] bg-[#FFFFFF52] rounded-full flex items-center justify-center cursor-pointer">
              <div className="shadow-[0px_1px_3px_0px_#EBEBEB] bg-white w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center">
                <img className="w-[1.5rem] h-[1.5rem]" src="icons/btn-play.svg"></img>
              </div>
            </div>
          </div>
          <p className="pl-[1.25rem] pt-[0.625rem] text-[0.875rem] font-medium text-gray-800">
            Hành trình trải nghiệm Siêu Trí Nhớ Học Đường của Học Sinh Chuyên Văn Trường THPT Lê Hồng Phong
          </p>
        </div>

        <div className="w-full lg:w-1/3">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Danh sách phát: 6 Videos</h3>
          <div className="w-full flex gap-4 lg:flex-col">
            {videos.map((video, index) => (
              <div key={index} className="cursor-pointer hover:bg-gray-200 transition flex gap-[1rem]">
                <div className="relative w-[6.125rem] h-[3.375rem] rounded-md aspect-video overflow-hidden">
                  <img src={`https://img.youtube.com/vi/${video.src.split("/embed/")[1]}/hqdefault.jpg`} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">{video.duration}</span>
                </div>
                <p className="truncate text-sm font-medium text-gray-800 mt-2 lg:block hidden">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
