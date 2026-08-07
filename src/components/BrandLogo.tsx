import Link from "next/link";

type BrandLogoProps = {
  variant?: "default" | "reversed";
  compact?: boolean;
  className?: string;
};

export default function BrandLogo({
  variant = "default",
  compact = false,
  className = "",
}: BrandLogoProps) {
  const foreground = variant === "reversed" ? "#FFFFFF" : "#081320";

  return (
    <Link
      href="/"
      aria-label="Pformance, naar de homepage"
      className={`inline-flex items-center gap-3 rounded-md focus-visible:outline-none ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 120 120"
        className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
      >
        <path
          d="M18 18H75C92 18 103 28 103 43C103 58 92 68 75 68H51L61 49H75C82 49 86 46 86 41C86 36 82 33 75 33H28L18 18Z"
          fill={foreground}
        />
        <path d="M38 55H62L48 93L21 106L33 72Z" fill="#2563EB" />
      </svg>
      {!compact ? (
        <span
          className={`font-display text-xl font-bold tracking-[-0.035em] sm:text-2xl ${
            variant === "reversed" ? "text-white" : "text-brand-navy"
          }`}
        >
          Pformance
        </span>
      ) : null}
    </Link>
  );
}
