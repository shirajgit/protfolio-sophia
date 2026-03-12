 
import { motion } from "framer-motion";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#060b16] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.14),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-20 md:px-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-300 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                Sophia Lacayo · Solasi
              </div>

              <h3 className="mt-6 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                Building strong brands,
                <span className="block bg-gradient-to-r from-cyan-200 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  modern growth, and digital direction.
                </span>
              </h3>

              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                Sophia Lacayo’s profile highlights leadership, marketing
                strategy, and modern digital awareness through a premium and
                executive-focused web presence.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Leadership", "Brand Strategy", "Digital Growth", "Innovation"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-[#0d1728]/80 px-4 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.7rem] border border-white/10 bg-[#0d1728]/80 p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Navigation
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {footerLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-slate-300 transition hover:text-cyan-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.7rem] border border-white/10 bg-[#0d1728]/80 p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Connect
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href="mailto:hello@solasi.com"
                    className="text-sm text-slate-300 transition hover:text-cyan-300"
                  >
                    hello@solasi.com
                  </a>
                  <a
                    href="#contact"
                    className="text-sm text-slate-300 transition hover:text-cyan-300"
                  >
                    Contact Sophia
                  </a>
                  <a
                    href="#projects"
                    className="text-sm text-slate-300 transition hover:text-cyan-300"
                  >
                    View Work
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Sophia Lacayo. All rights reserved.</p>

            <p>
              Designed &amp; Developed by{" "}
              <a
                  href="https://aishi-technologies.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text font-semibold text-transparent"
              >
                  Aishi Tech
                </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;