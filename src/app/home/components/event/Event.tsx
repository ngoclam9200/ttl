import Headline from "../../../../componnents/headline";
import ItemEvent from "./item-event";

interface BannerProps {
  data: { [key: string]: any };
}
export default function EventPage({ data }: BannerProps) {
  const event  = data ? JSON.parse(data["event"]) : {};
  return (
    <div className="w-full flex flex-col mx-auto py-[2rem] md:gap-[2rem] gap-[1rem]">
      <div className="w-full flex flex-col md:items-center md:justify-center  md:md:gap-[1.5rem] gap-[1rem]  gap-[1rem] mx-auto grid-container">
        <Headline title="Sự kiện" src="icons/event.png" titleHeading="Lich sự kiện" />
      </div>
      <div className="w-full bg-linear p-[2rem] rounded-[1rem] mx-auto grid-container">
        <ItemEvent event={event[0]} />
        <ItemEvent isTime={true} isReverse={true} event={event[1]} />
      </div>
    </div>
  );
}
