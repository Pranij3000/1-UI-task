import { Skills } from "../../data/Skill";
import Image from "next/image";
import SkillCard from "@/src/components/cards/SkillCard";
import AnimatedSkillCard from "@/src/components/cards/AnimatedSkillCard";
import { CarouselItem } from "@/components/ui/carousel";
import BasicCarousel from "@/src/components/ui/BasicCarousel";

export default function TaskOne() {
  return (
    <>
      <section className="task-one overflow-hidden py-15">
        <div className="container max-w-[1253px] px-5 mx-auto">
          <div className="title-wrapper mb-7 md:mb-12">
            <span className="font-medium text-[16px] md:text-[24px] leading-none">Your SkillShikshya Journey</span>
            <h1 className="mt-3 md:mt-6 font-nohemi text-[32px] leading-[120%]">
              <span className="text-primary-green">Step</span> In. <span className="text-primary-green">Skill</span> Up. <span className="text-primary-green">Stand</span> Out. 🚀
            </h1>
          </div>
          <div className="cards-wrapper grid grid-cols-2 gap-x-8 gap-y-10">
            <div className="col-span-2 md:col-span-1 relative z-1">
              <AnimatedSkillCard
                Card={
                  <SkillCard
                    defaultInfo={Skills[0]}
                    textMaxWidth="351px"
                    imageClass="aspect-257/339 -left-12.5 -bottom-5 w-40 lg:w-64"
                  />
                }
              >
                <div className={`absolute inset-0 rounded-[30px] overflow-hidden`}>
                  <div
                    style={{ maskImage: "url('/images/card-background-01.png')", maskSize: "100% 100%", maskPosition: "center center", maskRepeat: "no-repeat", background: Skills[0].bgColor }}
                    className="background-wrapper absolute inset-0"
                  ></div>
                  <BasicCarousel>
                    <CarouselItem>
                      <div className="relative h-full">
                        <div className="text-wrapper relative z-1 max-w-60 ml-auto pt-14 mr-6">
                          <p className=" text-white font-nohemi text-[20px] leading-[120%]">Clarity unlocked—stickers, sips, and skills all in one go!</p>
                        </div>
                        <div className="bg-image absolute aspect-482/323 w-[85%] left-6 bottom-0">
                          <Image
                            src="/images/carousel-bg-01.png"
                            alt=""
                            width="1449"
                            height="969"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  </BasicCarousel>
                </div>
              </AnimatedSkillCard>
            </div>
            <div className="col-span-2 md:col-span-1">
              <AnimatedSkillCard
                Card={
                  <SkillCard
                    defaultInfo={Skills[1]}
                    textMaxWidth="351px"
                    imageClass="aspect-180/367 right-0 lg:right-8 top-3.5 w-30 lg:w-45"
                    imagePosition="right"
                  />
                }
              >
                <div className={`absolute inset-0 rounded-[30px] overflow-hidden`}>
                  <div
                    style={{ maskImage: "url('/images/card-background-01.png')", maskSize: "100% 100%", maskPosition: "center center", maskRepeat: "no-repeat", background: Skills[1].bgColor }}
                    className="background-wrapper absolute inset-0"
                  ></div>
                  <BasicCarousel>
                    <CarouselItem>
                      <div className="relative h-full">
                        <div className="text-wrapper relative z-1 max-w-60 mr-auto pt-9 ml-10 md:ml-20">
                          <p className=" text-white font-nohemi text-[20px] leading-[120%]">Focused faces—learning mode: ON!</p>
                        </div>
                        <div className="bg-image absolute aspect-1590/909 w-[90%] right-0 bottom-0">
                          <Image
                            src="/images/carousel-bg-02.png"
                            alt=""
                            width="1449"
                            height="969"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative h-full">
                        <div className="text-wrapper relative z-1 text-center max-w-88 mx-auto pt-10">
                          <p className=" text-white font-nohemi text-[20px] leading-[120%]">Laptops, lessons, and a whole lot of growth!</p>
                        </div>
                        <div className="bg-image absolute aspect-1716/951 w-[98%] left-[50%] translate-x-[-50%] bottom-0">
                          <Image
                            src="/images/carousel-bg-03.png"
                            alt=""
                            width="1716"
                            height="951"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  </BasicCarousel>
                </div>
              </AnimatedSkillCard>
            </div>
            <div className="col-span-2 md:col-span-1">
              <SkillCard
                defaultInfo={Skills[2]}
                textMaxWidth="311px"
                imageClass="aspect-307/249 -left-12 bottom-5 lg:-bottom-3.5 w-50 lg:w-77"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <SkillCard
                defaultInfo={Skills[3]}
                imagePosition="right"
                textMaxWidth="337px"
                imageClass="aspect-280/310 -right-8 -bottom-13 w-50 lg:w-80 rotate-[6deg]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
