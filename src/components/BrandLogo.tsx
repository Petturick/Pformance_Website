type BrandLogoProps = {
  compact?: boolean;
  inverse?: boolean;
};

export default function BrandLogo({ compact = false, inverse = false }: BrandLogoProps) {
  const navy = inverse ? "#F7F7F4" : "#061C48";
  const blue = "#1F63FF";

  return (
    <span className="brand-logo" aria-label="Pformance">
      <svg className="brand-logo-mark" viewBox="0 0 48 36" aria-hidden="true">
        <path
          d="M17 5h10a10 10 0 0 1 0 20H17a10 10 0 1 1 0-20Z"
          fill="none"
          stroke={navy}
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M31 11h-10a10 10 0 0 0 0 20h10a10 10 0 1 0 0-20Z"
          fill="none"
          stroke={blue}
          strokeWidth="7"
          strokeLinecap="round"
        />
        <rect x="20" y="13" width="8" height="10" fill={inverse ? "#061C48" : "#fff"} opacity="0.98" />
      </svg>
      {!compact ? <span className="brand-logo-word" style={{ color: navy }}>Pformance</span> : null}
    </span>
  );
}
