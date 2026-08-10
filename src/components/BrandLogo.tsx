type BrandLogoProps = {
  compact?: boolean;
  inverse?: boolean;
};

export default function BrandLogo({ compact = false, inverse = false }: BrandLogoProps) {
  const lightSrc = compact ? "/pformance-mark-official.svg" : "/pformance-logo-official.svg";
  const darkSrc = compact ? "/pformance-mark-official-dark.svg" : "/pformance-logo-official-dark.svg";

  return (
    <span
      className={`brand-logo brand-logo-image-lockup${compact ? " brand-logo-compact" : ""}${inverse ? " brand-logo-forced-inverse" : ""}`}
      aria-label="Pformance"
    >
      <img className="brand-logo-image brand-logo-image-light" src={lightSrc} alt="" aria-hidden="true" />
      <img className="brand-logo-image brand-logo-image-dark" src={darkSrc} alt="" aria-hidden="true" />
    </span>
  );
}
