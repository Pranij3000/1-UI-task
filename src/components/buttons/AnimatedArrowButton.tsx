export default function AnimatedArrowButton({ buttonHover, text }: { buttonHover: boolean; text: string }) {
  return (
    <button className="flex items-center gap-2 cursor-pointer">
      <span className="font-outfit font-semibold text-[18px] text-white">{text}</span>
      <div className={`icon-wrapper aspect-square w-5 ${buttonHover && "animate-arrow"}`}>
        <img
          src="/images/arrow-right-white.png"
          alt=""
          className="w-full h-auto"
        />
      </div>
    </button>
  );
}
