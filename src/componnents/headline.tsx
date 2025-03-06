export default function Headline({ title, src, titleHeading }: { title: string; src: string; titleHeading: string }) {
  return (
    <>
      <div
        className="bg-white flex items-center justify-center px-[0.75rem] py-[0.5rem] rounded-full shadow-[0px_0px_0px_1px_#EBEBEB] gap-3 max-content"
        style={{ width: "max-content" }}
      >
        <img className="w-[1.25rem]" src={src} alt="icon" />
        <div className="text-[0.875rem]">{title}</div>
      </div>
      <h2 className=" text-[1.5rem] md:text-[2.5rem] font-bold">{titleHeading}</h2>
    </>
  );
}
