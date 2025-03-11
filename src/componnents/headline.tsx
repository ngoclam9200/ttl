export default function Headline({
  title,
  src,
  titleHeading,
}: {
  title: string;
  src: string;
  titleHeading: string;
}) {
  return (
    <>
      <div
        className="bg-white flex items-center justify-center px-[0.75rem] py-[0.5rem] rounded-full shadow-[0px_0px_0px_1px_#EBEBEB] gap-3 max-content md:mx-0 mx-3"
        style={{ width: "max-content" }}
      >
        <img className="w-[1.25rem]" src={src} alt="icon" />
        <div className="text-[0.875rem]">{title}</div>
      </div>
      <h2 className=" text-[1.25rem] md:md:text-[2rem] text-[1.5rem] font-bold md:mx-0 mx-3">
        {titleHeading}
      </h2>
    </>
  );
}
