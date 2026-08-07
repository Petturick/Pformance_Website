import type { AnchorHTMLAttributes, MouseEvent } from "react";

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

function isInternalRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export default function SiteLink({ href, onClick, target, ...props }: SiteLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      target === "_blank" ||
      !isInternalRoute(href)
    ) {
      return;
    }

    event.preventDefault();

    const nextUrl = new URL(href, window.location.origin);
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    const nextRelative = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;

    if (currentUrl !== nextRelative) {
      window.history.pushState({}, "", nextRelative);
      window.dispatchEvent(new PopStateEvent("popstate"));
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return <a href={href} target={target} onClick={handleClick} {...props} />;
}
