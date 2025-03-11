import Headline from "@/componnents/headline";
import ItemCourse from "./item-course";

const Course = () => {
  return (
    <>
      <div className="  w-full flex flex-col py-[2rem] py:[1rem] md:gap-[2rem] gap-[1rem]">
        <div className=" w-full flex flex-col items-left md:items-center md:justify-center md:md:gap-[1.5rem] gap-[1rem]  gap-[1rem]  mx-auto grid-container">
          <Headline
            title="Bắt đầu từ hôm nay"
            src="icons/app.png"
            titleHeading="ƯƠM MẦM HIỀN TÀI"
          />
        </div>
        <div className="w-full flex flex-col items-center md:gap-[1.5rem] gap-[1rem] justify-center mx-auto grid-container">
          <ItemCourse isReverse={false} src="feature/course.png" />
          <ItemCourse
            isReverse={true}
            src="feature/course.png"
            price="3.868.000đ"
          />
        </div>
      </div>
    </>
  );
};

export default Course;
