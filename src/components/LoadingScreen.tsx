import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
    >
      {/* Grain overlay for loading too */}
      <div 
        className="fixed inset-0 pointer-events-none z-[101] opacity-[0.08]"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")'
        }}
      />

      <div className="text-center space-y-8 relative z-[102]">
        {/* Logo/Name */}
        <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight">
          IVAN<span className="text-accent">.</span>
        </h1>

        {/* Loading bar */}
        <div className="w-64 md:w-80">
          <div className="h-px bg-border mb-2">
            <motion.div
              className="h-full bg-foreground"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between hud-text text-xs">
            <span>LOADING</span>
            <span>{Math.min(Math.floor(progress), 100)}%</span>
          </div>
        </div>

        {/* Status text */}
        <div className="hud-text text-xs opacity-60 space-y-1">
          <p>{progress < 30 && "// INITIALIZING ASSETS"}</p>
          <p>{progress >= 30 && progress < 60 && "// LOADING MEDIA"}</p>
          <p>{progress >= 60 && progress < 90 && "// PREPARING INTERFACE"}</p>
          <p>{progress >= 90 && "// READY"}</p>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-foreground/20" />
      <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-foreground/20" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-foreground/20" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-foreground/20" />
    </motion.div>
  );
};

export default LoadingScreen;
