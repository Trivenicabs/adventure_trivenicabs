import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
  banner = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
  banner?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow &&
        (banner ? (
          <span className={`banner text-sm ${align === "center" ? "" : "ml-2"}`}>{eyebrow}</span>
        ) : (
          <span className={`eyebrow ${align === "center" ? "center" : ""}`}>{eyebrow}</span>
        ))}
      <h2 className={`section-h text-ink ${banner ? "mt-5" : "mt-3"}`}>{title}</h2>
      {sub && (
        <p className="mt-3 font-serif-d text-lg leading-snug text-ink-soft">{sub}</p>
      )}
    </Reveal>
  );
}
