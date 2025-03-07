export default function ItemEvent({
  isTime = false,
  isReverse = false,
  event
}: {
  isTime?: boolean;
  isReverse?: boolean;
  event: any
}) {
  const Content = () => (
    <div className="w-full lg:w-1/2 p-4 h-full ">
      <div className="h-full">
        <div>
          <div className="md:text-2xl text-[1.125rem] font-bold mb-4">
            {event.title}
          </div>
          <div className="space-y-4 md:text-[0.875rem] text-[0.75rem] ">
            <div className="flex items-start gap-2">
              <img
                src="icons/check.png"
                className="w-[1.25rem] h-[1.25rem] mt-1"
              />
              <div>
                {event.description_1}
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img
                src="icons/check.png"
                className="w-[1.25rem] h-[1.25rem] mt-1"
              />
              <div>
              {event.description_2}
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img
                src="icons/check.png"
                className="w-[1.25rem] h-[1.25rem] mt-1"
              />
              <div>
              {event.description_3}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center md:justify-start justify-center text-[1rem]  gap-2 mt-4">
          <div className="text-blue-600 px-4 py-2 rounded cursor-pointer ">
            Tìm hiểu thêm
          </div>
          <img
            src="icons/arrow-right.png"
            className="w-[1.25rem] h-[1.25rem]"
          />
        </div>
      </div>
    </div>
  );
  const Image = () => (
    <div className="w-full lg:w-1/2 relative h-[18.75rem]">
      <img src={event.image} className="absolute inset-0 w-full h-full" />
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row w-full h-full relative mb-[2.5rem]">
      <div className="block lg:hidden">
        <Image />
        <Content />
      </div>
      <div className="hidden lg:flex w-full">
        {isReverse ? (
          <>
            <Content />
            <Image />
          </>
        ) : (
          <>
            <Image />
            <Content />
          </>
        )}
      </div>
    </div>
  );
}
