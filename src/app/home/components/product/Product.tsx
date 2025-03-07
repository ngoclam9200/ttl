import Headline from "../../../../componnents/headline";
import ItemProduct from "./item-product";

interface BannerProps {
  data: { [key: string]: any };
}
export default function Product({ data }: BannerProps) {
  const products: any[] = data? JSON.parse(data['product']): []
  return (
    <div className=" bg-gray w-full flex flex-col py-[2rem] gap-[2rem]">
      <div className=" w-full flex flex-col items-left md:items-center md:justify-center md:gap-[1.5rem]  gap-[1rem]  mx-auto grid-container">
        <Headline title="Sản phẩm" src="icons/ic_book.png" titleHeading="Sách và ấn phẩm" />
      </div>
      <div className="w-full flex flex-col items-center gap-[1.5rem] justify-center mx-auto grid-container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((item, index)=>(
             <ItemProduct data={item}/>
          ))}
        </div>
      </div>
    </div>
  );
}
