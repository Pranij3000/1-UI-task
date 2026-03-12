import CardTitle from "../ui/CardTitle";
import Image from "next/image";

interface Skill {
  title: string;
  subTitle: string;
  description: string;
  bgColor: string;
  image: string;
}

interface SkillCardProps {
  defaultInfo: Skill;
  textMaxWidth: string;
  imagePosition?: "left" | "right";
  imageClass: string;
}

export default function SkillCard({ defaultInfo, imagePosition = "left", imageClass, textMaxWidth }: SkillCardProps) {
  return (
    <>
      <div
        style={{ background: defaultInfo.bgColor }}
        className="card relative p-8 md:px-9 md:py-14.5 rounded-[30px]"
      >
        <div className={`text-wrapper relative z-1 ${imagePosition === "left" && "text-end"}`}>
          <div className="card-title mb-5 md:mb-8">
            <CardTitle
              title={defaultInfo.title}
              subtitle={defaultInfo.subTitle}
            />
          </div>
          <p
            style={{ maxWidth: textMaxWidth }}
            className={`text-white text-[14px] lg:text-[18px] ${imagePosition === "left" && "ml-auto"}`}
          >
            {defaultInfo.description}
          </p>
        </div>
        <div className={`absolute animate-card ${imageClass}`}>
          <Image
            src={defaultInfo.image}
            alt=""
            fill
          ></Image>
        </div>
      </div>
    </>
  );
}
