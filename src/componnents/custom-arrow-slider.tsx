import React from "react";

interface CustomArrowProps {
  onClick?: () => void;
  direction: "next" | "prev";
  position?: string;
}

const CustomArrow = React.forwardRef<HTMLButtonElement, CustomArrowProps>(
  ({ onClick, direction, position = "" }, ref) => (
    <button
      ref={ref}
      style={{
        [direction === "next" ? "right" : "left"]: position || 0,
      }}
      className="absolute cursor-pointer top-1/2 bg-white rounded-full w-[3.75rem] h-[3.75rem] shadow-md z-[9999] flex items-center justify-center transform -translate-y-1/2"
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
    >
      {direction === "next" ? (
        <img
          className="w-[2rem] h-[2rem]"
          src="/icons/arrow-right-banner.svg"
          alt="Next"
        />
      ) : (
        <img
          className="w-[2rem] h-[2rem]"
          src="/icons/arrow-left-banner.svg"
          alt="Previous"
        />
      )}
    </button>
  ),
);

CustomArrow.displayName = "CustomArrow";

export default CustomArrow;
