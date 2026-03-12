import Image from "next/image";
export default function ArrowButton({ onClick, direction = "right" }: { onClick: React.MouseEventHandler<HTMLButtonElement>; direction?: "left" | "right" }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer p-2 md:p-4 bg-[#FAFAFA] aspect-square rounded-full shadow-md "
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
