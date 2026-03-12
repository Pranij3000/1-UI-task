"use client";

import { useState } from "react";

import { Class } from "../../data/Classes";
import ClassCard from "@/src/components/cards/ClassCard";

export default function page() {
  const [active, setActive] = useState<number>(0);
  return (
    <section className="task-two overflow-hidden py-15">
      <div className="container max-w-314 px-5 mx-auto">
        <div className="title-wrapper mb-7 md:mb-12">
          <span className="font-medium text-[16px] md:text-[24px] leading-none">Explore our classes and master trending skills!</span>
          <h1 className="mt-3 md:mt-5 font-nohemi text-[32px] leading-[120%]">
            Dive Into <span className="text-primary-green">What’s Hot Right Now! 🔥</span>
          </h1>
        </div>
        <div className="cards-wrapper flex gap-8">
          {Class.map((item, index) => (
            <ClassCard
              key={index}
              index={index}
              info={item}
              isActive={index === active}
              setActive={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
