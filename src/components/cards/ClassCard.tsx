"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

const courseLogo = [
  {
    img: "/images/course-logo-01.png",
    aspect: "square",
    rotate: "-16.67deg",
  },
  {
    img: "/images/course-logo-02.png",
    aspect: "square",
    rotate: "7.22deg",
  },
  {
    img: "/images/course-logo-03.png",
    aspect: "55/75",
    rotate: "-9deg",
  },
  {
    img: "/images/course-logo-04.png",
    aspect: "square",
    rotate: "12.61deg",
  },
];

interface ClassCard {
  number: string;
  title: string;
  description: string;
}

export default function ClassCard({ info, isActive, setActive, index, prevIndex, activeIndex }: { info: ClassCard; isActive: boolean; setActive: (index: number) => void; index: number; prevIndex: number; activeIndex: number }) {
  const card = useRef(null);

  useGSAP(
    () => {
      if (isActive) {
        const tl = gsap.timeline();
        tl.set(".view-button-wrapper", {
          translateX: "0",
        });

        if (prevIndex < index) {
          tl.set(".course-container", {
            translateX: "-100%",
          });
        } else if (prevIndex > index) {
          tl.set(".course-container", {
            translateX: "100%",
          });
        }

        // if (prevIndex < index) {
        // } else if (prevIndex > index) {
        //   tl.set(".course-container", {
        //     translateX: "-100%",
        //   });
        // }

        tl.to(card.current, {
          flexGrow: 0.8,
          duration: 0.3,
        });
        tl.to(card.current, {
          flexGrow: 2.1,
          duration: 0.5,
        });

        tl.to(
          ".background-pink",
          {
            width: "0%",
            delay: 0.3,
            duration: 0.5,
          },
          "0",
        );

        tl.to(
          ".view-button-wrapper",
          {
            duration: 1,
            opacity: 1,
          },
          "0",
        );

        tl.to(
          ".course-container",
          {
            translateX: 0,
            duration: 0.5,
            opacity: 1,
          },
          "0",
        );
      } else {
        const tl = gsap.timeline();

        tl.to(card.current, {
          flexGrow: 2.4,
          duration: 0.3,
        });
        tl.to(card.current, {
          flexGrow: 1,
          duration: 0.5,
        });

        tl.to(
          ".background-pink",
          {
            width: "500%",
            delay: 0.3,
            duration: 0.5,
          },
          "0",
        );

        tl.to(
          ".view-button-wrapper",
          {
            duration: 0.3,
            translateX: "-50px",
          },
          "0",
        );
        tl.to(
          ".view-button-wrapper",
          {
            duration: 0.7,
            translateX: "200px",
            opacity: 0,
          },
          ">",
        );

        if (activeIndex > index) {
          tl.to(
            ".course-container",
            {
              translateX: "100%",
              duration: 0.5,
              opacity: 0,
            },
            "0",
          );
        } else {
          tl.to(
            ".course-container",
            {
              translateX: "-100%",
              duration: 0.5,
              opacity: 0,
            },
            "0",
          );
        }
      }
    },
    { dependencies: [isActive], scope: card },
  );
  return (
    <>
      <div
        ref={card}
        onClick={() => setActive(index)}
        className={`class-card flex-[1_1_0%]  relative rounded-[32px] overflow-hidden bg-dark-pink ${isActive ? "" : "cursor-pointer"}`}
      >
        <div className="background-pink absolute left-0 top-full aspect-square bg-light-pink rounded-full translate-x-[-50%] translate-y-[-50%]" />
        <div className="content-wrapper px-9 py-10">
          <div className="course-detail h-60.5">
            <div className="active-detail pb-16 flex flex-col gap-5 h-full justify-between">
              <div className="view-button-wrapper w-fit ml-auto">
                <button className="flex items-center gap-2 cursor-pointer">
                  <span className="font-outfit font-semibold text-[18px] text-white">View all Courses</span>
                  <div className="icon-wrapper aspect-square w-5">
                    <img
                      src="/images/arrow-right-white.png"
                      alt=""
                      className="w-full h-auto"
                    />
                  </div>
                </button>
              </div>
              <div className={`course-container`}>
                <div className="course-icon-wrapper max-w-115 mx-auto flex items-center justify-between gap-5">
                  {courseLogo.map((item, index) => (
                    <div
                      key={index}
                      style={{ aspectRatio: item.aspect, transform: `rotate(${item.rotate})` }}
                      className="img-wrapper h-19"
                    >
                      <img
                        src={item.img}
                        alt=""
                        className="h-full w-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={`relative course-title w-fit mx-auto  flex items-center gap-6 `}>
          <div className={`number relative `}>
            <strong className={`font-nohemi text-[150px] leading-[120%]  transition-all ease-in-out duration-500 ${isActive ? "text-[#F9EBEC]" : "text-dark-pink"}`}>{info.number}</strong>
            <span className={`absolute -top-6 -right-6 font-nohemi text-[64px]  transition-all ease-in-out duration-500 ${isActive ? "text-[#F9EBEC]" : "text-dark-pink"}`}>+</span>
          </div>
          <div className={`detail-wrapper `}>
            <h2 className={`font-outfit  transition-all ease-in-out duration-500 text-[32px] font-bold ${isActive ? "text-[#F9EBEC]" : "text-dark-pink"}`}>{info.title}</h2>
            <p className={`font-outfit  transition-all ease-in-out duration-500 text-[18px] ${isActive ? "text-[#F9EBEC]" : "text-dark-pink"}`}>{info.description}</p>
          </div>
        </div> */}
      </div>
    </>
  );
}
