// Decorative mountain-range silhouette divider between sections.
export default function Divider({
  color = "ink",
  bg = "paper",
  flip = false,
}: {
  color?: "ink" | "forest" | "rust" | "paper";
  bg?: "paper" | "paper2" | "cream" | "ink";
  flip?: boolean;
}) {
  const fills: Record<string, string> = {
    ink: "var(--color-ink)",
    forest: "var(--color-forest)",
    rust: "var(--color-rust)",
    paper: "var(--color-paper)",
  };
  const bgs: Record<string, string> = {
    paper: "var(--color-paper)",
    paper2: "var(--color-paper-2)",
    cream: "var(--color-cream)",
    ink: "var(--color-ink)",
  };
  return (
    <div
      aria-hidden
      className="relative w-full overflow-hidden leading-[0]"
      style={{ background: bgs[bg], transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-[64px] w-full sm:h-[84px]">
        <path
          fill={fills[color]}
          d="M0,90 L0,58 L110,30 L180,52 L280,14 L360,46 L470,8 L560,40 L660,18 L760,52 L880,12 L980,44 L1090,20 L1190,50 L1290,24 L1380,48 L1440,28 L1440,90 Z"
        />
        {/* snow caps */}
        <g fill="var(--color-cream)" opacity="0.9">
          <path d="M470,8 L455,22 L468,20 L478,30 L486,18 Z" />
          <path d="M280,14 L268,26 L279,24 L288,34 L295,22 Z" />
          <path d="M880,12 L868,24 L879,22 L888,32 L895,20 Z" />
        </g>
      </svg>
    </div>
  );
}
