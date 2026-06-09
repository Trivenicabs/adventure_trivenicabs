import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <header className="border-b-2 border-ink bg-paper-2">
      <div className="container-x py-14">
        <Reveal>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="section-h mt-3 max-w-3xl !text-[clamp(2.4rem,6vw,4.2rem)] text-ink">
            {title}
          </h1>
          {sub && (
            <p className="mt-4 max-w-xl font-serif-d text-lg leading-snug text-ink-soft">
              {sub}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
