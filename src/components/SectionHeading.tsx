type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "flex flex-col items-center text-center" : ""}>
      <div className="flex items-center gap-3">
        <span aria-hidden className="h-px w-8 bg-[#7c5cfa]" />
        <p className="text-sm font-semibold tracking-[0.25em] text-[#7c5cfa]">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}
