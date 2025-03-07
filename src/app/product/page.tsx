import AllProduct from "./componnents/all-product/all-product";
import Application from "./componnents/application/application";
import HitaGameSection from "./componnents/banner/banner";
import Testimonials from "./componnents/comment/comment";
import Course from "./componnents/course/course";
import VideoPlaylist from "./componnents/other/other";

export default function ProductPage() {
  return (
    <div className="bg-white">
      <HitaGameSection />
      <Application />
      <Course />
      {/* <AllProduct /> */}
      <VideoPlaylist />
      <Testimonials />
    
    </div>
  );
}
