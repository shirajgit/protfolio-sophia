import   { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import profile from "../assets/solasi-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      ) as HTMLElement[];

      const scrollPos = window.scrollY + 140;

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(id || "about");
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6 ${
            scrolled
              ? "border-white/10 bg-[#081120]/80 shadow-[0_10px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
              : "border-white/10 bg-white/5 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
            
              <img src={profile} alt="profile" className="rounded-full" />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">Sophia Lacayo</p>
              <p className="text-xs tracking-[0.24em] text-slate-400 uppercase">
                Solasi.
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.10)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(34,211,238,0.22)] transition duration-300 hover:-translate-y-0.5"
            >
              Let’s Connect
            </a>
          </div>

          {/* Mobile button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl lg:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="absolute h-[2px] w-5 rounded-full bg-white"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="absolute h-[2px] w-5 rounded-full bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="absolute h-[2px] w-5 rounded-full bg-white"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="fixed left-4 right-4 top-24 z-50 rounded-[2rem] border border-white/10 bg-[#081120]/95 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:hidden"
            >
              <div className="space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = active === link.href.replace("#", "");

                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "border-cyan-400/20 bg-cyan-400/10 text-white"
                          : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-slate-500">→</span>
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Sophia Lacayo
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Executive profile focused on leadership, brand strategy, and
                  modern digital direction.
                </p>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-black"
                >
                  Contact Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;