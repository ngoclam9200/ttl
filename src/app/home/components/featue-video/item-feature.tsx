export default function ItemFeature({ src, value, description }: { src: string; value: string; description: string }) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg flex flex-col items-center md:gap-4 gap-3 p-[0.625rem]">
      <img className="w-[2.5rem] h-[2.5rem]" src={src} alt="icon" />
      <div className="w-full h-full text-center md:text-[2rem] text-[1.5rem] font-bold">{value}</div>
      <div className="w-full h-full text-center md:text-[0.875rem] text-[0.85rem] text-gray">{description}</div>
    </div>
  );
}
