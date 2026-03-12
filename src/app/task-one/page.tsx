import Image from "next/image";
import CardTitle from "./../../components/ui/CardTitle";

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
              <div className="card relative p-8 md:px-9 md:py-14.5 rounded-[30px] bg-[#F45B5B]">
                <div className="text-wrapper relative z-1 text-end">
                  <div className="card-title mb-5 md:mb-8">
                    <CardTitle
                      title="Start with Clarity"
                      subtitle="Step into a better learning path."
                    />
                  </div>
                  <p className="text-white md:max-w-[351px] ml-auto text-[14px] lg:text-[18px]">Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.</p>
                </div>
                <div className="absolute animate-card aspect-257/339 -left-12.5 -bottom-5 w-40 lg:w-64.5">
                  <Image
                    src="/images/card-01.png"
                    alt=""
                    fill
                  ></Image>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="card relative p-8 md:px-9 md:py-14.5 rounded-[30px] bg-[#5492A0]">
                <div className="text-wrapper relative z-1">
                  <div className="card-title mb-5 md:mb-8">
                    <CardTitle
                      title="Learn by Doing"
                      subtitle="Practical skills, real projects."
                    />
                  </div>
                  <p className="text-white md:max-w-[351px] text-[14px] lg:text-[18px]">Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.</p>
                </div>
                <div className="absolute animate-card aspect-180/367 right-0 lg:right-8 top-3.5 w-30 lg:w-45">
                  <Image
                    src="/images/card-02.png"
                    alt=""
                    fill
                  ></Image>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="card relative p-8 md:px-9 md:py-14.5 rounded-[30px] bg-[#6C64A8]">
                <div className="text-wrapper relative z-1 text-end">
                  <div className="card-title mb-5 md:mb-8">
                    <CardTitle
                      title="Get Mentored & Supported"
                      subtitle="You're not learning alone."
                    />
                  </div>
                  <p className="text-white md:max-w-[311px] ml-auto text-[14px] lg:text-[18px]">Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.</p>
                </div>
                <div className="absolute animate-card aspect-307/249 -left-12 bottom-5 lg:-bottom-3.5 w-50 lg:w-77">
                  <Image
                    src="/images/card-03.png"
                    alt=""
                    fill
                  ></Image>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="card relative p-8 md:px-9 md:py-14.5 rounded-[30px] bg-[#A88964]">
                <div className="text-wrapper relative z-1">
                  <div className="card-title mb-5 md:mb-8">
                    <CardTitle
                      title="Achieve & Showcase"
                      subtitle="Build your portfolio, get job-ready."
                    />
                  </div>
                  <p className="text-white md:max-w-[337px] text-[14px] lg:text-[18px]">Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.</p>
                </div>
                <div className="absolute animate-card aspect-280/310 -right-8 -bottom-13 w-50 lg:w-70">
                  <Image
                    src="/images/card-04.png"
                    alt=""
                    fill
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
