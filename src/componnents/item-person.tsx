export default function ItemPerson({
  src,
  name,
  description,
}: {
  src?: string;
  name?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col rounded-[24px] border border-[#E5E7EB] bg-white">
      <img className="rounded-t-[24px] " src={src} />
      <div className="text-[#001416] text-[14px] font-medium md:text-[20px]  md:font-bold  font-['Roboto'] pt-2 pl-4">
        {name}
      </div>
      <div className="text-[#259BD4] text-[12px] font-medium md:text-[14px]  md:font-bold  font-['Roboto'] pl-4 pt-2 pb-4">
        {description}
      </div>
    </div>
  );
}
