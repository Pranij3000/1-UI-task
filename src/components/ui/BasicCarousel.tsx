"use client";
import { useState } from "react";
import { Carousel, CarouselContent, type CarouselApi } from "@/components/ui/carousel";
import ArrowButton from "../buttons/ArrowButton";

export default function BasicCarousel({ children }: { children: React.ReactNode }) {
  const [api, setApi] = useState<CarouselApi>();
  return (
    <>
      <Carousel
        setApi={setApi}
        className="relative h-full [&>div]:h-full"
      >
        <CarouselContent className="h-full">{children}</CarouselContent>
      </Carousel>
      <div className="absolute left-0 top-[50%] -translate-y-[50%]">
        <ArrowButton
          direction="left"
          onClick={() => api?.scrollPrev()}
        />
      </div>
      <div className="absolute right-0 top-[50%] -translate-y-[50%]">
        <ArrowButton onClick={() => api?.scrollNext()} />
      </div>
    </>
  );
}

<style></style>;
