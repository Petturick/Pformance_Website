type BrandLogoProps = {
  compact?: boolean;
  inverse?: boolean;
};

export default function BrandLogo({ compact = false, inverse = false }: BrandLogoProps) {
  return (
    <span className={`brand-logo${inverse ? " brand-logo-forced-inverse" : ""}`} aria-label="Pformance">
      <span className="brand-logo-marks" aria-hidden="true">
        <img className="brand-logo-mark brand-logo-mark-light" src="/pformance-mark.svg" alt="" width="48" height="36" />
        <img className="brand-logo-mark brand-logo-mark-dark" src="/pformance-mark-inverse.svg" alt="" width="48" height="36" />
      </span>
      {!compact ? <span className="brand-logo-word">Pformance</span> : null}
    </span>
  );
}
