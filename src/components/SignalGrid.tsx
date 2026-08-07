export default function SignalGrid() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-square w-full max-w-[560px] overflow-hidden rounded-[12px] border border-white/10 bg-[#0D1B2A] shadow-2xl shadow-black/20"
    >
      <div className="signal-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(37,99,235,0.2),transparent_34%)]" />

      <div className="absolute left-[15%] top-[58%] h-[21%] w-[21%] border border-blue-400/50 bg-blue-600/90 shadow-[0_0_45px_rgba(37,99,235,0.24)]" />
      <div className="absolute left-[46%] top-[29%] h-[27%] w-[27%] border border-cyan-400/35 bg-cyan-900/45" />
      <div className="absolute right-[11%] top-[59%] h-[17%] w-[17%] border border-emerald-300/40 bg-teal-500/75" />

      <div className="performance-slash absolute bottom-[9%] right-[8%] h-[34%] w-[12%] bg-blue-600/85" />
      <div className="performance-slash absolute bottom-[15%] right-[21%] h-[21%] w-[6%] bg-white/15" />

      <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
            Pformance system
          </p>
          <p className="mt-2 max-w-56 font-display text-xl font-semibold leading-tight text-white">
            Strategie, technologie en uitvoering in één lijn
          </p>
        </div>
        <span className="hidden text-xs text-slate-400 sm:block">01 / 03</span>
      </div>
    </div>
  );
}
