import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BlobCursor = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (blobRef.current) {
        gsap.to(blobRef.current, {
          x: clientX - 60,
          y: clientY - 60,
          duration: 0.1,
          ease: "power2.out",
        });
      }

      trailsRef.current.forEach((trail, index) => {
        if (trail) {
          gsap.to(trail, {
            x: clientX - (index === 0 ? 62.5 : index === 1 ? 37.5 : 30),
            y: clientY - (index === 0 ? 62.5 : index === 1 ? 37.5 : 30),
            duration: 0.5 + index * 0.1,
            ease: "power2.out",
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={(el) => {
          if (el) trailsRef.current[0] = el;
        }}
        className="fixed pointer-events-none z-[100] w-[125px] h-[125px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(82, 39, 255, 0.4) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div
        ref={(el) => {
          if (el) trailsRef.current[1] = el;
        }}
        className="fixed pointer-events-none z-[100] w-[75px] h-[75px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <div
        ref={blobRef}
        className="fixed pointer-events-none z-[100] w-[60px] h-[60px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(236, 72, 153, 0.3) 100%)",
          boxShadow: "0 0 20px rgba(168, 85, 247, 0.8), 10px 10px 5px rgba(0,0,0,0.75)",
          filter: "blur(5px)",
        }}
      >
        <div
          className="w-[20px] h-[20px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            background: "rgba(255,255,255,0.8)",
          }}
        />
      </div>
      <div
        ref={(el) => {
          if (el) trailsRef.current[2] = el;
        }}
        className="fixed pointer-events-none z-[100] w-[60px] h-[60px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(219, 39, 119, 0.4) 0%, transparent 70%)",
          filter: "blur(25px)",
        }}
      />
    </>
  );
};

export default BlobCursor;
