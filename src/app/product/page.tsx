import Application from "./componnents/application/application";
import HitaGameSection from "./componnents/banner/banner";
import Course from "./componnents/course/course";

export default function ProductPage() {
  return (
    <div className="bg-white">
      <HitaGameSection />
      <Application />
      <Course />
      {/* <div className="mt-30">
      </div>
      <div className="mt-30">
  
      </div>
      <div className="mt-30">
        <AllProduct />
      </div>
      <div className="mt-30">
        <VideoPlaylist />
      </div>
      <div className="mt-30">
        <Testimonials/>
      </div> */}
    </div>
  );
}
