"use client";
import { useState } from "react";
export default function AnimatedSkillCard({ Card, children }: { Card: React.ReactNode; children: React.ReactNode }) {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <>
      <div className="animation-card relative">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`relative z-1`}
        >
          <div className={`animation-wrapper transition-all ease-in-out duration-500 ${hovered ? "-translate-x-[50%] opacity-0 pointer-events-none" : ""}`}>{Card}</div>
        </div>
        <div className={`carousel-wrapper transition-all ease-in-out duration-1000 ${hovered ? "opacity-100" : "opacity-0"}`}>{children}</div>
      </div>
    </>
  );
}
