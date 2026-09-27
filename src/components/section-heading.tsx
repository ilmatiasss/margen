import { ArrowLink } from "./arrow-link";

export function SectionHeading({
  label,
  href,
  linkText,
}: {
  label: string;
  href: string;
  linkText: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-4">
      <h2 className="kicker text-xs text-muted">{label}</h2>
      <ArrowLink href={href}>{linkText}</ArrowLink>
    </div>
  );
}
