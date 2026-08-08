import { partners } from "../data/content";

export default function Partners() {
  return (
    <section id="partners" className="container-page pb-16 md:pb-24 text-center">
      <p className="eyebrow">Our Partners</p>
      <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-navy max-w-2xl mx-auto leading-tight">
        People Who Have Supported <span className="underline-swipe">Our Mission</span>{" "}
        Through Sport For Development
      </h2>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {partners.map((name) => (
          <span
            key={name}
            className="text-lg sm:text-xl font-display font-bold text-slate/60 hover:text-navy transition-colors"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
