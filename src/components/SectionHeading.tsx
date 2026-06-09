import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <span className="chip ring-aurora">{eyebrow}</span>}
      <h2 className="mt-4 font-display text-[clamp(1.9rem,4.2vw,3.1rem)] font-semibold leading-[1.05]">
        {title}
      </h2>
      {sub && <p className="mt-3 text-base leading-relaxed text-mute">{sub}</p>}
    </Reveal>
  );
}
