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
    <header className="relative overflow-hidden pt-36 pb-12">
      <div className="aurora left-[10%] top-[20%] h-72 w-72 bg-gold/15" />
      <div className="aurora right-[12%] top-[10%] h-80 w-80 bg-cyan/15 [animation-delay:-4s]" />
      <div className="container-x relative">
        <Reveal>
          {eyebrow && <span className="chip ring-aurora">{eyebrow}</span>}
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,6vw,4rem)] font-semibold leading-[1]">
            {title}
          </h1>
          {sub && <p className="mt-4 max-w-xl text-lg text-mute">{sub}</p>}
        </Reveal>
      </div>
    </header>
  );
}
