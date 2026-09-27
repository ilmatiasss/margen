type MarqueeBandProps = {
  items: string[];
  className?: string;
};

export function MarqueeBand({ items, className }: MarqueeBandProps) {
  const sequence = (
    <span className="flex shrink-0 items-center">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          <span className="kicker px-4 text-sm font-bold sm:text-base">
            {item}
          </span>
          <span aria-hidden className="text-sm sm:text-base">
            ✦
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      className={`overflow-hidden whitespace-nowrap bg-accent py-3 text-accent-foreground ${className ?? ""}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {sequence}
        {sequence}
      </div>
    </div>
  );
}
