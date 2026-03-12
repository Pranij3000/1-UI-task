import { Skills } from "../../data/Skill";

import SkillCard from "@/src/components/cards/SkillCard";
import AnimatedSkillCard from "@/src/components/cards/AnimatedSkillCard";
export default function page() {
  return (
    <>
      <section className="task-one overflow-hidden py-15">
        <div className="container max-w-[1253px] px-5 mx-auto">
          <div className="title-wrapper mb-7 md:mb-12">
            <span className="font-medium text-[16px] md:text-[24px] leading-none">Your SkillShikshya Journey</span>
            <h1 className="mt-3 md:mt-6 font-nohemi text-[32px] leading-[120%]">
              <span className="text-primary">Step</span> In. <span className="text-primary">Skill</span> Up. <span className="text-primary">Stand</span> Out. 🚀
            </h1>
          </div>
          <div className="cards-wrapper grid grid-cols-2 gap-x-8 gap-y-10">
            <div className="col-span-2 md:col-span-1">
              <AnimatedSkillCard
                Card={
                  <SkillCard
                    defaultInfo={Skills[0]}
                    textMaxWidth="351px"
                    imageClass="aspect-257/339 -left-12.5 -bottom-5 w-40 lg:w-64"
                  />
                }
              >
                <div
                  style={{ maskImage: "url('/images/card-background-01.png')", maskSize: "100% 100%", maskPosition: "center center", maskRepeat: "no-repeat", background: Skills[0].bgColor }}
                  className={`absolute inset-0 rounded-[30px] bg-black`}
                ></div>
              </AnimatedSkillCard>
            </div>
            <div className="col-span-2 md:col-span-1">
              {/* <AnimationWrapper>
                <SkillCard
                  defaultInfo={Skills[1]}
                  textMaxWidth="351px"
                  imageClass="aspect-180/367 right-0 lg:right-8 top-3.5 w-30 lg:w-45"
                  imagePosition="right"
                />
              </AnimationWrapper> */}
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
