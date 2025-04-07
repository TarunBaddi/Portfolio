
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        scale: 1.02,
      });
    }
    return () => {
      if (tiltNode) {
        (tiltNode as any)?.vanillaTilt?.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className={`glass-card ${className}`}
    >
      {children}
    </div>
  );
};

export default TiltCard;
