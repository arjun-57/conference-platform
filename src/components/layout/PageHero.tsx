export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero py-18 text-white lg:py-24">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-light">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">{description}</p>
      </div>
    </section>
  );
}
