import Image from "next/image";
export default function ArrowButton({ onClick, direction = "right" }: { onClick: React.MouseEventHandler<HTMLButtonElement>; direction?: "left" | "right" }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer p-2 md:p-4 bg-[#FAFAFA] aspect-square rounded-full shadow-[inset_0px_6px_15px_-2px_#10182814,0px_6px_15px_-2px_#10182814,0px_4px_4px_0px_#00000040]"
    >
      <Image
        src="/images/arrow-right.svg"
        alt="Arrow"
        width="64"
        height="64"
        className={`w-8 aspect-square ${direction === "left" ? "rotate-180" : ""}`}
      />
    </button>
  );
}
