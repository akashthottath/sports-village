import { useState } from "react";
import { faqs } from "../data/content";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-slate/15 rounded-xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between gap-4 text-left px-5 py-4 transition-colors ${
          isOpen ? "bg-brand-blue-light" : "hover:bg-slate/5"
        }`}
      >
        <span
          className={`text-sm font-semibold ${
            isOpen ? "text-brand-blue" : "text-navy"
          }`}
        >
          {item.question}
        </span>
        <span
          className={`shrink-0 h-6 w-6 rounded-full border flex items-center justify-center text-xs transition-transform ${
            isOpen ? "border-brand-blue text-brand-blue rotate-180" : "border-slate/30 text-slate"
          }`}
        >
          ⌄
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-slate text-sm leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="container-page pb-16 md:pb-24">
      <div className="text-center max-w-xl mx-auto">
        <p className="eyebrow">FAQs</p>
        <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-navy">
          <span className="underline-swipe">Questions</span> About Sport And Development
        </h2>
      </div>

      <div className="mt-12 grid lg:grid-cols-[320px_1fr] gap-8 items-start">
        <div
          id="partner"
          className="relative rounded-2xl overflow-hidden h-72 lg:h-full min-h-[260px] flex flex-col justify-end p-6"
        >
          <img
            src="https://picsum.photos/seed/partner-with-us/500/600"
            alt="Coach high-fiving a young athlete"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="relative">
            <h3 className="font-display font-bold text-white text-xl">Partner With Us</h3>
            <p className="mt-2 text-white/80 text-sm leading-relaxed">
              Join Us in Transforming Lives, Communities and the Nation Through Sports
            </p>
            <a
              href="#faq"
              className="mt-4 inline-flex items-center justify-center bg-white text-navy text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-blue hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
