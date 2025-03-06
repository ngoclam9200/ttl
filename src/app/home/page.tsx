import Banner from "@/app/home/components/banner/Banner";
import FeatureVideo from "@/app/home/components/featue-video/FeatureVideo";
import EventPage from "@/app/home/components/event/Event";
import Product from "@/app/home/components/product/Product";
import Student from "@/app/home/components/student/Student";
import Teacher from "@/app/home/components/teacher/Teacher";
import Share from "@/app/home/components/share/share";
import News from "@/app/home/components/news/news";
export default function Home() {
  return (
    <div className="">
      <Banner />
      <FeatureVideo />
      <EventPage />
      <Product />
      <Student />
      <Teacher />
      <Share />
      <News></News>
    </div>
  );
}
