import { conferenceConfig } from "@/config/conference";

export function NewsTicker() {
  // Duplicate items so the seamless loop works (the ticker-track animates -50%)
  const items = [...conferenceConfig.newsTicker, ...conferenceConfig.newsTicker];

  return (
    <div className="w-full overflow-hidden border-y border-brand/20 bg-brand-dark/90 py-2.5 backdrop-blur">
      <div className="ticker-track gap-16 px-8">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-sm font-medium text-white/85 after:mx-8 after:text-brand-light/40 after:content-['•'] last:after:content-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
