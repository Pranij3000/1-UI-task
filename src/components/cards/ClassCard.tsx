import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ClassCard {
  number: string;
  title: string;
  description: string;
}

export default function ClassCard({ info, isActive, setActive, index }: { info: ClassCard; isActive: boolean; setActive: React.Dispatch<React.SetStateAction<number>>; index: number }) {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
      },
    });
  });
  return (
    <>
      <div
        onClick={() => setActive(index)}
        className={`class-card py-10 px-9 rounded-[32px] overflow-hidden ${isActive ? "flex-2 bg-dark-pink" : "flex-1 bg-light-pink cursor-pointer"}`}
      >
        <div className="course-detail max-h-60.5"></div>
        <div className={`relative course-title w-fit mx-auto  flex items-center gap-6 `}>
          {/* <div className={`number relative `}>
            <strong className={`font-nohemi text-[150px] leading-[120%]  transition-all ease-in-out duration-500 ${isActive ? "text-[#F9EBEC]" : "text-dark-pink"}`}>{info.number}</strong>
            <span className={`absolute -top-6 -right-6 font-nohemi text-[64px]  transition-all ease-in-out duration-500 ${isActive ? "text-[#F9EBEC]" : "text-dark-pink"}`}>+</span>
          </div>
          <div className={`detail-wrapper `}>
            <h2 className={`font-outfit  transition-all ease-in-out duration-500 text-[32px] font-bold ${isActive ? "text-[#F9EBEC]" : "text-dark-pink"}`}>{info.title}</h2>
            <p className={`font-outfit  transition-all ease-in-out duration-500 text-[18px] ${isActive ? "text-[#F9EBEC]" : "text-dark-pink"}`}>{info.description}</p>
          </div> */}
        </div>
      </div>
    </>
  );
}
