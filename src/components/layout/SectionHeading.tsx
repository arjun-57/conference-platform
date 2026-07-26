import { cn } from "@/lib/utils";

/** Eyebrow + title pair used to open most content sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-widest text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-black text-brand-dark sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
