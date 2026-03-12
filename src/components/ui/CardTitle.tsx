export default function CardTitle({ title, subtitle }: { title?: string; subtitle?: string }) {
  return (
    <>
      <h2 className="font-nohemi text-white text-[24px] md:text-[32px] leading-[120%] mb-[10px]">{title}</h2>
      <span className="text-white font-medium text-[16px] md:text-[24px] leading-none">{subtitle}</span>
    </>
  );
}
