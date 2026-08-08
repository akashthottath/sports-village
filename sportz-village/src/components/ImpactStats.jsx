import { useState } from "react";
import { impactStats, states } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";

function StatCard({ stat }) {
  const [ref, value] = useCountUp(stat.value);

  const formatted =
    value >= stat.value ? stat.display : value.toLocaleString("en-IN");

  return (
    <div
      ref={ref}
      className="bg-white rounded-xl border-t-4 border-brand-red px-4 py-6 text-center shadow-sm"
    >
      <p className="font-display font-extrabold text-navy text-3xl sm:text-4xl">
        {formatted}
      </p>
      <p className="mt-2 text-xs sm:text-sm text-slate leading-snug">{stat.label}</p>
    </div>
  );
}

export default function ImpactStats() {
  const [activeState, setActiveState] = useState(states[0]);

  return (
    <section id="impact" className="bg-brand-blue-light py-16 md:py-24">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="eyebrow">Our Impact</p>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-navy">
              Championing <span className="underline-swipe">#SportForChange</span> In
              India
            </h2>
          </div>
          <p className="text-slate text-sm max-w-sm">
            From classrooms to communities, our impact reaches children across India.
            Explore the numbers behind the change.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {impactStats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
        <p className="mt-3 text-xs text-slate/80">
          *Tracked through our proprietary sport management platform across all program sites.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-6 md:p-10">
          <div>
            <h3 className="font-display font-bold text-2xl text-navy">{activeState.name}</h3>
            <p className="mt-2 text-slate text-sm leading-relaxed max-w-sm">
              {activeState.description}
            </p>
            <p className="mt-6 font-display font-extrabold text-4xl text-brand-blue">
              {activeState.children}
            </p>
            <p className="text-xs uppercase tracking-wide text-slate">Children reached</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {states.map((s) => (
                <button
                  key={s.name}
                  onClick={() => setActiveState(s)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${
                    activeState.name === s.name
                      ? "bg-navy text-white border-navy"
                      : "border-slate/30 text-slate hover:border-brand-blue hover:text-brand-blue"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://picsum.photos/seed/india-map/500/500"
              alt={`Map highlighting program presence in ${activeState.name}`}
              className="rounded-2xl w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
