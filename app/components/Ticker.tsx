const ITEMS = [
  "NATIVE PERFORMANCE",
  "DESIGN EXCELLENCE",
  "MOBILE FIRST",
  "USER CENTERED",
  "PIXEL PERFECT",
  "SCALABLE APPS",
  "COMING SOON",
  "INNOVATION DRIVEN",
];

export default function Ticker() {
  return (
    <div className="overflow-hidden border-y border-zinc-200/60 bg-zinc-50/80 dark:border-white/[0.05] dark:bg-white/[0.015] py-4">
      <div className="flex animate-ticker whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center shrink-0">
            {ITEMS.map((label, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center gap-7 px-7"
              >
                <span className="text-xs font-medium text-zinc-400 dark:text-zinc-600 tracking-[0.2em] uppercase">
                  {label}
                </span>
                <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700 inline-block flex-shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
