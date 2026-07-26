import { newsTicker } from "@/config";

/**
 * Scrolling announcement strip.
 *
 * Server component — the marquee is pure CSS, so no JavaScript ships for it.
 * The list is duplicated because `.ticker-track` animates to -50%, which makes
 * the loop seamless.
 */
export function NewsTicker() {
  const items = [...newsTicker, ...newsTicker];

  return (
    <div className="w-full overflow-hidden border-y border-brand/20 bg-brand-dark/90 py-2.5 backdrop-blur">
      <div className="ticker-track gap-16 px-8">
        {items.map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= newsTicker.length ? "true" : undefined}
            className="inline-flex items-center gap-3 text-sm font-medium text-white/85 after:mx-8 after:text-brand-light/40 after:content-['•'] last:after:content-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
