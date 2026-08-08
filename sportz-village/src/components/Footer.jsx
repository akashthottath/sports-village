import { useState } from "react";

const socials = [
  { label: "Facebook", icon: "f" },
  { label: "X", icon: "𝕏" },
  { label: "LinkedIn", icon: "in" },
  { label: "Instagram", icon: "◎" },
];

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-page py-12">
        <div className="grid md:grid-cols-[1.3fr_1fr_1.3fr_1.2fr] gap-10">

          <div>
            <p className="text-[10px] tracking-[0.2em] font-semibold text-white/70">
              SPORTZ VILLAGE
            </p>
            <p className="font-display font-extrabold text-2xl">Foundation</p>
            <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-xs">
              Join us in building a more inclusive, healthy and opportunity-rich world
              through sport.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-brand-red transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#top" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors">Our Partners</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>1800-891-3830, 080-4153-8054</li>
              <li>foundation@sportzvillage.com</li>
              <li>
                <span className="text-white font-medium block mb-1">
                  Head Office &amp; Registered Office
                </span>
                Sportz Village Foundation, 1st Floor, No. 147/L, 10th Cross, 12th Main,
                3rd Block, Koramangala, Bangalore, Karnataka – 560034
                <br />
                CIN: 92100KA2017NPL106705
              </li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-xl p-5">
            <h4 className="font-semibold text-white mb-1">Subscribe To Newsletter</h4>
            <p className="text-xs text-white/60 mb-4">
              Sign up to SVF's monthly newsletter to get the latest updates.
            </p>
            {submitted ? (
              <p className="text-sm text-brand-red font-medium">
                Thanks for subscribing! 🎉
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="bg-transparent border border-white/25 rounded-md px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-brand-blue"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="bg-transparent border border-white/25 rounded-md px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-brand-blue"
                />
                <button type="submit" className="btn-primary mt-1 justify-center">
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="container-page text-center text-xs text-white/50">
          © 2026 Sportz Village Foundation. All Rights Reserved. This is a frontend
          rebuild created for interview/portfolio purposes.
        </p>
      </div>
    </footer>
  );
}
