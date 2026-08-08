export default function Hero() {
  return (
    <section id="top" className="relative isolate">
      <div className="relative h-[640px] sm:h-[600px] md:h-[640px] w-full overflow-hidden">
        <img
          src="https://picsum.photos/seed/svf-hero/1600/900"
          alt="Children playing sport in a school ground"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/60 to-navy-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />

        <div className="relative h-full container-page flex flex-col justify-end pb-16 pt-32">
          <h1 className="font-display font-extrabold text-white text-[2.2rem] leading-[1.1] sm:text-5xl md:text-[3.4rem] max-w-2xl">
            Sport as the Tool.
            <br />
            <span className="bg-brand-red px-2 inline-block mt-1">
              Better Lives
            </span>{" "}
            as the Purpose.
          </h1>

          <p className="text-white/85 text-sm sm:text-base max-w-xl mt-5 leading-relaxed">
            India has 250 million children in schools. Most grow up without access to sport.
            Sportz Village Foundation aims to change that — one child, one school, one
            community at a time.
          </p>

          <div className="mt-7">
            <a href="#impact" className="btn-primary">
              See Our Impact
            </a>
          </div>

          <a
            href="#resources"
            className="hidden sm:flex items-center gap-3 absolute right-0 bottom-24 md:bottom-28 bg-white/95 backdrop-blur rounded-xl shadow-xl px-4 py-3 max-w-xs hover:-translate-y-0.5 transition-transform"
          >
            <div className="h-12 w-12 rounded-lg bg-navy flex items-center justify-center shrink-0 text-white font-display font-bold text-[10px] leading-tight text-center">
              ANNUAL
              <br />
              IMPACT
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-brand-blue">
                Our Annual Impact Report
              </p>
              <p className="text-[11px] text-slate">2025 – 26</p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-blue shrink-0">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
