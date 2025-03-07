export default function ItemProduct({data}: any) {

  return (
    <div className="flex flex-col rounded-[24px] border border-[#E5E7EB]">
      <img className="rounded-t-[24px] " src={data.image} />
      <div className="text-[#001416] text-[14px] font-medium md:text-[20px]  md:font-bold  font-['Roboto'] p-4">{data.title}</div>
    </div>
  );
}
