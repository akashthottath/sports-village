export default function NewsletterPromo() {
  return (
    <section className="container-page pb-16 md:pb-20">
      <div className="grid md:grid-cols-2 gap-8 items-center bg-brand-blue-light rounded-2xl overflow-hidden p-2">
        <img
          src="https://picsum.photos/seed/newsletter-bulletin/700/450"
          alt="Children celebrating with Sportz Village Foundation team"
          className="rounded-xl h-64 md:h-80 w-full object-cover"
        />
        <div className="p-4 md:p-6">
          <p className="eyebrow">Newsletters</p>
          <h3 className="mt-3 font-display font-bold text-2xl text-navy">
            Sport in CSR: April–June Bulletin
          </h3>
          <p className="mt-2 text-xs text-slate flex items-center gap-1.5">
            <span aria-hidden>📅</span> April – June 2026
          </p>
          <p className="mt-4 text-slate text-sm leading-relaxed">
            Sport is often positioned as a natural driver of positive change. But
            meaningful outcomes don't come from participation alone — they come from
            intentional design.
          </p>
          <a href="#resources" className="btn-primary mt-6">
            Download Now
          </a>
        </div>
      </div>
    </section>
  );
}
