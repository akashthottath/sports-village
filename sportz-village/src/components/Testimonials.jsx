import { useState } from "react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const go = (dir) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="container-page py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <img
          src="https://picsum.photos/seed/ecosystem-team/700/500"
          alt="Sportz Village Foundation team and partners"
          className="rounded-2xl w-full h-72 lg:h-96 object-cover"
        />

        <div>
          <p className="eyebrow">In Their Own Words</p>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-navy">
            Voices From The <span className="underline-swipe">Ecosystem</span>
          </h2>
          <p className="mt-4 text-slate text-sm leading-relaxed max-w-lg">
            The true measure of our impact lies in the voices of those we serve and
            work alongside. These perspectives from across the ecosystem highlight how
            sport is transforming lives and strengthening communities.
          </p>

          <div className="mt-8 border border-slate/20 rounded-2xl p-6 relative min-h-[180px] flex flex-col justify-between">
            <span className="text-brand-blue text-4xl font-serif leading-none">&ldquo;</span>
            <p className="text-ink text-[15px] leading-relaxed -mt-2">{active.quote}</p>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="font-semibold text-navy text-sm">{active.name}</p>
                <p className="text-slate text-xs">{active.role}</p>
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Previous testimonial"
                  onClick={() => go(-1)}
                  className="h-9 w-9 rounded-full border border-slate/30 flex items-center justify-center text-slate hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  ‹
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={() => go(1)}
                  className="h-9 w-9 rounded-full border border-slate/30 flex items-center justify-center text-slate hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Show testimonial from ${t.name}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-brand-blue" : "w-3 bg-slate/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
