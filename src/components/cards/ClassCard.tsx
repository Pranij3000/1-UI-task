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
  const [hovered, isHovered] = useState<boolean>(false);
  const [buttonHover, isButtonHovered] = useState<boolean>(false);

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

        tl.to(card.current, {
          flexGrow: 0.8,
          duration: 0.5,
        });
        tl.to(card.current, {
          flexGrow: 2.1,
          duration: 0.5,
        });

        tl.to(
          ".background-pink",
          {
            width: "0%",
            delay: 0.5,
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
            delay: 0.5,
            duration: 0.5,
            opacity: 1,
          },
          "0",
        );

        tl.to(
          ".course-title",
          {
            gridTemplateRows: "1fr",
            duration: 0.5,
            translateX: "0",
            opacity: 1,
            rotate: "0",
            translateY: "0",
          },
          "0",
        );

        tl.to(
          ".course-title-number",
          {
            delay: 0.3,
            duration: 0.7,
            color: "#F9EBEC",
          },
          "0",
        );

        tl.to(
          ".top-course-title",
          {
            rotate: "-10deg",
            translateX: "-20px",
            translateY: "-20px",

            duration: 0.3,
          },
          "0",
        );

        tl.to(
          ".top-course-title",
          {
            rotate: "+90deg",
            translateY: "100%",
            translateX: "50%",
            opacity: 0,
            duration: 0.5,
          },
          ">",
        );
      } else {
        const tl = gsap.timeline();

        tl.to(card.current, {
          flexGrow: 2.4,
          duration: 0.5,
        });
        tl.to(card.current, {
          flexGrow: 1,
          duration: 0.5,
        });

        tl.to(
          ".background-pink",
          {
            width: "500%",
            delay: 0.5,
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
              translateX: "-20px",
              duration: 0.3,
            },
            "0",
          );

          tl.to(
            ".course-container",
            {
              pointerEvents: "none",
              translateX: "100%",
              duration: 0.5,
              opacity: 0,
            },
            ">",
          );
        } else {
          tl.to(
            ".course-container",
            {
              translateX: "20px",
              duration: 0.3,
            },
            "0",
          );

          tl.to(
            ".course-container",
            {
              pointerEvents: "none",
              translateX: "-100%",
              duration: 0.5,
              opacity: 0,
            },
            ">",
          );
        }

        tl.to(
          ".course-title",
          {
            duration: 0.3,
            rotate: "10deg",
          },
          "0",
        );

        tl.to(
          ".course-title",
          {
            duration: 0.7,
            opacity: 0,
            rotate: "-90deg",
            translateX: "-50%",
            translateY: "-200%",
          },
          ">",
        );

        tl.to(
          ".course-title-number",
          {
            delay: 0.3,
            duration: 0.7,
            color: "#c33241",
          },
          "0",
        );

        tl.to(
          ".top-course-title",
          {
            rotate: "-0deg",
            translateY: "0%",
            translateX: "0%",

            opacity: 1,
            delay: 0.3,
            duration: 0.5,
          },
          "0",
        );
      }
    },
    { dependencies: [isActive], scope: card },
  );

  return (
    <>
      <div
        onMouseOver={() => isHovered(true)}
        onMouseLeave={() => isHovered(false)}
        ref={card}
        onClick={() => setActive(index)}
        className={`class-card flex-[1_1_0%] relative rounded-[32px] bg-dark-pink ${isActive ? "" : "cursor-pointer"}`}
      >
        <div className="background-wrapper absolute inset-0 rounded-[32px] overflow-hidden">
          <div className="background-pink absolute left-0 top-full aspect-square bg-light-pink rounded-full translate-x-[-50%] translate-y-[-50%]" />
        </div>
        <div className="content-wrapper relative z-1 px-9 pt-10 pb-5 overflow-hidden">
          <div className="course-detail h-60.5 relative">
            <div className="active-detail pb-16 flex flex-col gap-5 h-full justify-between">
              <div className="view-button-wrapper w-fit ml-auto">
                <button
                  onMouseOver={() => isButtonHovered(true)}
                  onMouseLeave={() => isButtonHovered(false)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <span className="font-outfit font-semibold text-[18px] text-white">View all Courses</span>
                  <div className={`icon-wrapper aspect-square w-5 ${buttonHover && "animate-arrow"}`}>
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
                      className="img-wrapper h-10 md:h-19"
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
            <div className="top-course-title absolute w-[218px] h-[178px] bottom-6">
              <div className="wrapper -rotate-90 ">
                <h2 className=" font-outfit leading-none mb-3 font-bold text-[32px] text-dark-pink">{info.title}</h2>
                <p className="font-outfit leading-[120%] text-dark-pink">{info.description}</p>
              </div>
            </div>
          </div>
          <div className="course-title-wrapper flex justify-center gap-6">
            <strong className="course-title-number font-nohemi text-[#F9EBEC] relative leading-none font-bold text-[64px] md:text-[150px]">
              {info.number}
              <span className="absolute text-[32px] md:text-[64px] top-[-10%] left-[95%]">+</span>
            </strong>
            <div className="max-w-54.5 h-[150px] flex items-center">
              <div className="course-title text-[#F9EBEC] origin-left grid overflow-hidden">
                <div className="overflow-hidden">
                  <h2 className=" font-outfit leading-none mb-3 font-bold text-[32px]">{info.title}</h2>
                  <p className="font-outfit leading-[120%]">{info.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isActive !== true && (
          <div className={`absolute z-2 top-0 translate-y-[-59%] left-[50%] transition-all ease-in-out duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
            <span>Click me!</span>
            <div className="arrow-wrapper w-12.5 aspect-square">
              <img
                src="/images/hovered-arrow.png"
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
