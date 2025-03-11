"use client";
import Headline from "../../../../componnents/headline";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import ItemShare from "@/componnents/item-share";
import CustomArrow from "@/componnents/custom-arrow-slider";
interface BannerProps {
  data: { [key: string]: any };
}
export default function Share({ data }: BannerProps) {
  const shares: any[] = data["share"] ? JSON.parse(data["share"]) : [];

  const [activeIndex, setActiveIndex] = useState(0);
  // const testimonials: ItemShareProps[] = [
  //   {
  //     name: "Chị Vyna Oanh Nguyễn",
  //     title: "Giáo viên tại Bang Texas, Hoa Kỳ",
  //     avatar: "feature/avt.png",
  //     comment:
  //       "Em xin gửi lời BIẾT ƠN chân thành đến Thầy Nguyễn Phùng Phong – một người thầy HIỀN TRIẾT nhất của gia đình em. Biết ơn Vũ trụ đã cho em được biết đến Thầy, được “học và hành” để trở thành Cha Mẹ...",
  //     isSeeMore: false,
  //   },
  //   {
  //     name: "Trần Dương Quốc Bảo",
  //     title: "Outliers",
  //     avatar: "feature/avt.png",
  //     comment:
  //       "Con rất biết ơn thầy Nguyễn Phùng Phong đã đồng hành và huấn luyện để con thay đổi theo hướng tích cực nhất. Con rất cảm ơn những thầy cô của Tâm Trí Lực đã tận tình hỗ trợ con cũng như những Outliers...",
  //     isSeeMore: false,
  //   },
  //   {
  //     name: "Trần Dương Quốc Bảo",
  //     title: "Outliers",
  //     avatar: "feature/avt.png",
  //     comment:
  //       "Con rất biết ơn thầy Nguyễn Phùng Phong đã đồng hành và huấn luyện để con thay đổi theo hướng tích cực nhất. Con rất cảm ơn những thầy cô của Tâm Trí Lực đã tận tình hỗ trợ con cũng như những Outliers...",
  //     isSeeMore: false,
  //   },
  //   {
  //     name: "Chị Vyna Oanh Nguyễn",
  //     title: "Giáo viên tại Bang Texas, Hoa Kỳ",
  //     avatar: "feature/avt.png",
  //     comment:
  //       "Em xin gửi lời BIẾT ƠN chân thành đến Thầy Nguyễn Phùng Phong – một người thầy HIỀN TRIẾT nhất của gia đình em. Biết ơn Vũ trụ đã cho em được biết đến Thầy, được “học và hành” để trở thành Cha Mẹ...",
  //     isSeeMore: false,
  //   },
  //   {
  //     name: "Trần Dương Quốc Bảo",
  //     title: "Outliers",
  //     avatar: "feature/avt.png",
  //     comment:
  //       "Con rất biết ơn thầy Nguyễn Phùng Phong đã đồng hành và huấn luyện để con thay đổi theo hướng tích cực nhất. Con rất cảm ơn những thầy cô của Tâm Trí Lực đã tận tình hỗ trợ con cũng như những Outliers...",
  //     isSeeMore: false,
  //   },
  //   {
  //     name: "Trần Dương Quốc Bảo",
  //     title: "Outliers",
  //     avatar: "feature/avt.png",
  //     comment:
  //       "Con rất biết ơn thầy Nguyễn Phùng Phong đã đồng hành và huấn luyện để con thay đổi theo hướng tích cực nhất. Con rất cảm ơn những thầy cô của Tâm Trí Lực đã tận tình hỗ trợ con cũng như những Outliers...",
  //     isSeeMore: false,
  //   },
  //   {
  //     name: "Trần Dương Quốc Bảo",
  //     title: "Outliers",
  //     avatar: "feature/avt.png",
  //     comment:
  //       "Con rất biết ơn thầy Nguyễn Phùng Phong đã đồng hành và huấn luyện để con thay đổi theo hướng tích cực nhất. Con rất cảm ơn những thầy cô của Tâm Trí Lực đã tận tình hỗ trợ con cũng như những Outliers...",
  //     isSeeMore: false,
  //   },
  // ];

  const settings = {
    dots: true,
    infinite: shares.length > 6 ? true : false,
    speed: 500,
    slidesPerRow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    rows: 2,
    arrows: false,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    beforeChange: (oldIndex: any, newIndex: any) => setActiveIndex(newIndex),
    appendDots: (dots: any) => (
      <div className="flex justify-center">
        <ul className="flex items-center justify-center px-[0.375rem] py-[0.5rem] rounded-[1rem]">{dots}</ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div className={`transition-all duration-300 ${i === activeIndex ? "w-[1.5rem] bg-blue-500 h-[0.5rem] rounded-md" : "w-[0.5rem] bg-gray-300 h-[0.5rem] rounded-full"}`} />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: shares.length > 6 ? true : false,
          slidesPerRow: 1,
          slidesToShow: 1,
          arrows: false,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-linear w-full flex flex-col py-[2rem] md:gap-[2rem] gap-[1rem] mt-[2rem]">
      <div className="w-full flex flex-col items-left md:gap-[1.5rem] gap-[1rem] justify-left m-auto grid-container">
        <Headline title="Cảm nhận" src="icons/star.svg" titleHeading="Chia sẻ của Phụ huynh - Outliers" />
      </div>

      <div className="w-full pt-[0rem] m-auto grid-container">
        <Slider {...settings}>
          {shares.map((item, index) => (
            <div className="p-[0.5rem]">
              <ItemShare user={item.user} content={item.content} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
