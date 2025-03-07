import Headline from "../../../../componnents/headline";
import ItemEvent from "./item-event";

export default function EventPage() {
  return (
    <div className="w-full flex flex-col mx-auto py-[2rem] md:gap-[2rem] gap-[1rem]">
      <div className="w-full flex flex-col md:items-center md:justify-center  md:md:gap-[1.5rem] gap-[1rem]  gap-[1rem] mx-auto grid-container">
        <Headline title="Sự kiện" src="icons/event.png" titleHeading="Lich sự kiện" />
      </div>
      <div className="w-full bg-linear p-[2rem] rounded-[1rem] mx-auto grid-container">
        <ItemEvent src="feature/banner-event.png" />
        <ItemEvent src="feature/banner-event2.png" isTime={true} isReverse={true} />
      </div>
    </div>
  );
}
