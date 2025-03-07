import { getKeys } from "@/api/setting.api";
import Banner from "@/app/home/components/banner/Banner";
import EventPage from "@/app/home/components/event/Event";
import FeatureVideo from "@/app/home/components/featue-video/FeatureVideo";
import News from "@/app/home/components/news/news";
import Product from "@/app/home/components/product/Product";
import Share from "@/app/home/components/share/share";
import Student from "@/app/home/components/student/Student";
import Teacher from "./components/teacher/Teacher";

export default async function Home() {
  const data = await getKeys(
    "banner,partner,player,ai,student,achievements,feature_1,feature_2,feature_3,feature_4,feature_5,feature_6,event,product,best_student,teacher,share"
  );
  return (
    <div className="">
      <Banner data={data} />
      <FeatureVideo data={data} />
      <EventPage data={data} />
      <Product data={data} />
      <Student data={data} />
      <Teacher data={data} />
      <Share data={data}/>
      <News></News>
    </div>
  );
}
