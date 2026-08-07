type BrandLogoProps = {
  compact?: boolean;
  inverse?: boolean;
};

export default function BrandLogo({ compact = false, inverse = false }: BrandLogoProps) {
  const wordmarkColor = inverse ? "#F7F7F4" : "#061C48";
  const markSrc = inverse ? "/pformance-mark-inverse.svg" : "/pformance-mark.svg";

  return (
    <span className="brand-logo" aria-label="Pformance">
      <img
        className="brand-logo-mark"
        src={markSrc}
        alt=""
        width="48"
        height="36"
        aria-hidden="true"
      />
      {!compact ? (
        <span className="brand-logo-word" style={{ color: wordmarkColor }}>
          Pformance
        </span>
      ) : null}
    </span>
  );
}
