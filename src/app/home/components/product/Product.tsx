import Headline from "../../../../componnents/headline";
import ItemProduct from "./item-product";

export default function Product() {
  return (
    <div className=" bg-gray w-full flex flex-col py-[2rem] py:[1rem] md:gap-[2rem] gap-[1rem]">
      <div className=" w-full flex flex-col items-left md:items-center md:justify-center md:md:gap-[1.5rem] gap-[1rem]  gap-[1rem]  mx-auto grid-container">
        <Headline title="Sản phẩm" src="icons/ic_book.png" titleHeading="Sách và ấn phẩm" />
      </div>
      <div className="w-full flex flex-col items-center md:gap-[1.5rem] gap-[1rem] justify-center mx-auto grid-container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
        </div>
      </div>
    </div>
  );
}
