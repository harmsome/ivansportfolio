import { ReactNode } from "react";

interface StarBorderProps {
  children: ReactNode;
  className?: string;
  speed?: string;
}

const StarBorder = ({ children, className = "", speed = "5s" }: StarBorderProps) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 rounded-md overflow-hidden"
        style={{
          background: "linear-gradient(90deg, transparent, cyan, transparent)",
          animation: `rotate ${speed} linear infinite`,
        }}
      />
      <div className="relative bg-background rounded-md m-[2px]">
        {children}
      </div>
      <style>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default StarBorder;
