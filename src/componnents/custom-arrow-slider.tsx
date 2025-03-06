import React from "react";

interface CustomArrowProps {
  onClick?: () => void;
  direction: "next" | "prev";
}

const CustomArrow = React.forwardRef<HTMLButtonElement, CustomArrowProps>(({ onClick, direction }, ref) => (
  <button
    ref={ref}
    className={`absolute cursor-pointer ${
      direction === "next" ? "right-0" : "left-0"
    } top-1/2 bg-white rounded-full w-[3.75rem] h-[3.75rem] shadow-md z-[9999] flex items-center justify-center transform -translate-y-1/2`}
    onClick={(e) => {
      e.stopPropagation();
      onClick && onClick();
    }}
  >
    {direction === "next" ? (
      <img className="w-[2rem] h-[2rem]" src="/icons/arrow-right-banner.svg" alt="Next" />
    ) : (
      <img className="w-[2rem] h-[2rem]" src="/icons/arrow-left-banner.svg" alt="Previous" />
    )}
  </button>
));

CustomArrow.displayName = "CustomArrow";

export default CustomArrow;
