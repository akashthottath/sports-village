import { stories } from "../data/content";

export default function StoriesFromField() {
  return (
    <section id="resources" className="container-page py-16 md:py-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="eyebrow">Success Stories</p>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-navy">
            <span className="underline-swipe">Stories</span> From The Field
          </h2>
        </div>
        <a href="#resources" className="btn-primary self-start sm:self-auto">
          View All
        </a>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <article
            key={story.title}
            className="border border-slate/15 rounded-2xl p-4 flex flex-col hover:shadow-lg transition-shadow"
          >
            <img
              src={story.image}
              alt={story.title}
              className="rounded-xl h-44 w-full object-cover"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-brand-red/10 text-brand-red text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mt-3 font-display font-bold text-navy text-base leading-snug">
              {story.title}
            </h3>
            <p className="mt-2 text-slate text-sm leading-relaxed flex-1">
              {story.description}
            </p>
            <a href="#resources" className="btn-primary mt-4 self-start">
              Learn More
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
