import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface CircularNextButtonProps {
  nextCategoryName: string;
  onClick: () => void;
}

const CircularNextButton = ({ nextCategoryName, onClick }: CircularNextButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        style={{
          width: isHovered ? "auto" : "64px",
          height: "64px",
          minWidth: "64px",
        }}
      >
        <div className="flex items-center gap-3 px-4">
          <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
          <span 
            className="text-primary font-semibold whitespace-nowrap transition-all duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              maxWidth: isHovered ? "200px" : "0px",
            }}
          >
            {nextCategoryName}
          </span>
        </div>
      </button>
    </div>
  );
};

export default CircularNextButton;
