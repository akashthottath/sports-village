import { useState } from "react";
import { navLinks } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-page flex items-center justify-between py-5">

        <a href="#top" className="flex flex-col leading-none text-white shrink-0">
          <span className="text-[10px] tracking-[0.2em] font-semibold text-white/80">
            SPORTZ VILLAGE
          </span>
          <span className="font-display font-extrabold text-xl md:text-2xl">
            Foundation
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/90 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#partner" className="hidden lg:inline-flex btn-primary">
          Partner With Us
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2 -mr-2"
        >
          {open ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-x-0 top-0 bg-navy transition-transform duration-300 origin-top ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ minHeight: open ? "100vh" : "0" }}
      >
        <div className="container-page flex items-center justify-between py-5">
          <span className="font-display font-extrabold text-xl text-white">Foundation</span>
          <button
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            className="text-white p-2 -mr-2"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="container-page flex flex-col gap-1 pb-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/90 text-lg py-3 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a href="#partner" onClick={() => setOpen(false)} className="btn-primary mt-6 w-full">
            Partner With Us
          </a>
        </nav>
      </div>
    </header>
  );
}
