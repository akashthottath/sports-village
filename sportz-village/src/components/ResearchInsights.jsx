import { insights } from "../data/content";

export default function ResearchInsights() {
  return (
    <section className="container-page pb-16 md:pb-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="eyebrow">Research And Insights</p>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-navy">
            Building The <span className="underline-swipe">Evidence</span> For Sport
          </h2>
        </div>
        <a href="#resources" className="btn-primary self-start sm:self-auto">
          View All
        </a>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((item) => (
          <article key={item.title} className="group">
            <div className="relative rounded-2xl overflow-hidden h-48">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-navy text-white text-xs font-bold px-3 py-1 rounded-full">
                {item.tag}
              </span>
            </div>
            <h3 className="mt-4 font-display font-bold text-base text-navy leading-snug">
              {item.title}
            </h3>
            <p className="mt-2 text-slate text-sm leading-relaxed">{item.description}</p>
            <a
              href="#resources"
              className="mt-3 inline-flex items-center gap-1 text-brand-blue text-sm font-semibold hover:gap-2 transition-all"
            >
              Learn More <span aria-hidden>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
