import PageHeader from "./PageHeader";
import { site } from "@/lib/site";

export default function Legal({
  title,
  sections,
}: {
  title: string;
  sections: { h: string; p: string[] }[];
}) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} sub={`${site.name} · ${site.domain}`} />
      <section className="container-x section-pad max-w-3xl">
        <div className="grid gap-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-xl font-semibold text-ink">{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i} className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {para}
                </p>
              ))}
            </div>
          ))}
          <p className="text-xs text-ink-soft/70">
            This is a launch-phase policy summary. For specific queries, contact{" "}
            {site.phoneDisplay} or {site.email}.
          </p>
        </div>
      </section>
    </>
  );
}
