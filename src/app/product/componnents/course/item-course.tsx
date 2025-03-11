export default function ItemCourse({
  isTime = false,
  isReverse = false,
  src,
  price,
}: {
  isTime?: boolean;
  isReverse?: boolean;
  src?: string;
  price?: string;
}) {
  const Content = () => (
    <div className="w-full lg:w-1/2 p-4 h-full ">
      <div className="h-full">
        <div>
          <div className="md:text-[0.875rem] text-[0.85rem]">
            🔰 KHAI GIẢNG: 19H00 ngày 05 hằng tháng.
          </div>
          <div className="md:text-2xl md:text-[1.125rem] text-[1rem] font-bold mb-4 mt-2">
            HÀNH TRÌNH ƯƠM MẦM HIỀN TÀI
          </div>
          <div className="space-y-4 md:text-[0.875rem] text-[0.85rem] ">
            <div className="flex items-start gap-2">
              <img
                src="icons/check.png"
                className="w-[1.25rem] h-[1.25rem] mt-1"
              />
              <div>
                Giúp con học nhẹ nhàng, hiểu và nhớ dễ dàng các môn học ở trường
                mỗi ngày với ứng dụng 5’ Thuộc Bài.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img
                src="icons/check.png"
                className="w-[1.25rem] h-[1.25rem] mt-1"
              />
              <div>
                Giúp con Rèn giũa phẩm chất bản thân mỗi ngày với giáo trình
                thực chứng đã được áp dụng thành công cho cộng đồng Tâm Trí Lực
                và các thành viên đội tuyển Siêu trí nhớ, Siêu trí tuệ Việt Nam
                trong hơn 10 năm qua.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img
                src="icons/check.png"
                className="w-[1.25rem] h-[1.25rem] mt-1"
              />
              <div>
                Cùng con rèn luyện thể lực với hành trình Hiền tài khỏe mạnh.
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center md:justify-start justify-center text-[1rem]  gap-2 mt-4">
          {price ? (
            <div className="flex flex-col gap-2">
              <div className=" flex font-bold text-[1.25rem] gap-2">
                <p style={{ textDecoration: "line-through", color: "gray" }}>
                  {" "}
                  {price}{" "}
                </p>
                <p className="text-red-500"> {price} </p>
              </div>
              <button className="text-white bg-blue-500 px-4 py-2 rounded-lg cursor-pointer text-[0.85rem] lg:text-[0.875rem]">
                Thêm vào giỏ hàng
              </button>
            </div>
          ) : (
            <button className="text-white bg-blue-500 px-4 py-2 rounded-lg cursor-pointer text-[0.85rem] lg:text-[0.875rem]">
              Tìm hiểu thêm
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const Image = () => (
    <div className="w-full lg:w-1/2 relative h-[18.75rem] ">
      <img src={src} className="absolute inset-0 w-full h-full" />
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row w-full h-full relative md:mb-[2.5rem]  mb-[1rem] ">
      <div className="block lg:hidden bg-linear p-[1rem] ">
        <Image />
        <Content />
      </div>
      <div className="hidden lg:flex w-full bg-linear rounded-[1rem] items-center p-[1rem]">
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
