import { focusAreas } from "../data/content";

export default function FocusAreas() {
  return (
    <section id="programs" className="bg-brand-blue-light py-16 md:py-24">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Focus Areas</p>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl leading-tight text-navy">
            Leveraging Sport For Sporting And Non-Sporting{" "}
            <span className="underline-swipe">Outcomes</span>
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <img src={area.image} alt={area.title} className="h-36 w-full object-cover" />
              <div className="p-5 flex flex-col gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wide text-brand-red">
                  {area.tag}
                </span>
                <h3 className="font-display font-bold text-navy text-base leading-snug">
                  {area.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#impact" className="btn-primary">
            View Our Theory Of Change
          </a>
        </div>
      </div>
    </section>
  );
}
