import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./icons";

export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`link-arrow kicker text-xs ${className ?? ""}`}>
      {children}
      <ArrowIcon className="h-3.5 w-3.5" />
    </Link>
  );
}
