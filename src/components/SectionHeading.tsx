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
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className={`eyebrow ${align === "center" ? "center" : ""}`}>{eyebrow}</span>}
      <h2 className="section-h mt-3 text-ink">{title}</h2>
      {sub && (
        <p className="mt-3 font-serif-d text-lg leading-snug text-ink-soft">
          {sub}
        </p>
      )}
    </Reveal>
  );
}
