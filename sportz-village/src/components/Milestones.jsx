import { milestones } from "../data/content";

export default function Milestones() {
  return (
    <section className="container-page py-16 md:py-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="eyebrow">Recognition</p>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-navy">
            Our <span className="underline-swipe">Milestones</span>
          </h2>
        </div>
        <p className="text-slate text-sm max-w-md">
          Our work has been recognized by leading institutions and industry bodies for
          creating meaningful impact through sport. These acknowledgements reflect the
          collective efforts of our partners, communities and teams across India.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        {milestones.map((m) => (
          <figure key={m.caption} className="text-center">
            <img
              src={m.image}
              alt={m.caption}
              className="rounded-xl h-44 w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-slate">{m.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
