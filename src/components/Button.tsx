import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "positive";
type ButtonSize = "md" | "lg";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-[12px] font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-blue disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white shadow-sm hover:bg-brand-blue-dark hover:shadow-md",
  secondary:
    "border border-brand-navy/20 bg-white text-brand-navy hover:border-brand-navy/40 hover:bg-brand-off",
  ghost: "text-brand-navy hover:bg-brand-navy/5",
  positive: "bg-brand-teal text-brand-navy hover:bg-[#2ac5b4]",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3 text-base",
};

function classes(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
): string {
  return [base, variants[variant], sizes[size], className]
    .filter(Boolean)
    .join(" ");
}

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonLinkProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

type ButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export function ButtonLink({
  href,
  external = false,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classNames = classes(variant, size, className);

  if (external) {
    return (
      <a
        href={href}
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames} {...rest}>
      {children}
    </Link>
  );
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
