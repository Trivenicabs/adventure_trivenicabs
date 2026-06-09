export default function Stamp({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid h-full w-full place-items-center rounded-full border-2 border-ink bg-paper text-ink shadow-[3px_3px_0_0_var(--color-ink)] ${className}`}
    >
      <svg viewBox="0 0 120 120" className="h-full w-full motion-safe:animate-[spin-slow_28s_linear_infinite]">
        <defs>
          <path
            id="stamp-circle"
            d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
            fill="none"
          />
        </defs>
        <text
          fontFamily="var(--font-anton)"
          fontSize="11.5"
          letterSpacing="2.2"
          fill="currentColor"
        >
          <textPath href="#stamp-circle" startOffset="0%">
            TRIVENI ADVENTURE CO · EST. RISHIKESH ·
          </textPath>
        </text>
      </svg>
      {/* center motif */}
      <div className="absolute grid place-items-center">
        <svg width="34" height="34" viewBox="0 0 24 24" className="text-rust" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
          <path d="M3 20h18L15 8l-3 5-2-3-7 10Z" fill="currentColor" />
          <circle cx="17.5" cy="6" r="1.6" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
