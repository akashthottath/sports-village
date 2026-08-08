export default function AssessmentCTA() {
  return (
    <section className="container-page -mt-8 relative z-10">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src="https://picsum.photos/seed/assessment-banner/1400/300"
          alt="Children in a sports session"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6 sm:py-8">
          <p className="text-white text-sm sm:text-base max-w-lg text-center sm:text-left">
            Take a quick assessment to identify how sport can help your organisation
            achieve its social impact, CSR or community development goals.
          </p>
          <a
            href="#faq"
            className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-semibold text-sm px-6 py-3 rounded-full whitespace-nowrap hover:bg-red-700 transition-colors shrink-0"
          >
            Start Your 15-Min Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
