 
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
};

const contactItems = [
  {
    label: "Email",
    value: "hello@solasi.com",
  },
  {
    label: "Focus",
    value: "Leadership, marketing, digital growth",
  },
  {
    label: "Location",
    value: "Available for global opportunities",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#060b16] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.14),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-10"
          >
            <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">
                Contact
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-5xl xl:text-6xl">
                Let’s create
                <span className="block bg-gradient-to-r from-cyan-200 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  something meaningful.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                Connect with Sophia Lacayo to discuss leadership, partnerships,
                marketing strategy, digital growth, and forward-looking business
                opportunities through Solasi.
              </p>

              <div className="mt-10 space-y-4">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="rounded-[1.5rem] border border-white/10 bg-[#0d1728]/80 p-5 backdrop-blur-xl"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-white">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="mailto:hello@solasi.com"
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-semibold text-black shadow-[0_12px_40px_rgba(34,211,238,0.22)]"
                >
                  Contact Sophia
                </motion.a>

                <motion.a
                  href="#projects"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
                >
                  View Work
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-10"
          >
            <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                  Send a Message
                </p>
                <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                  Start the conversation
                </h3>
                <p className="mt-3 max-w-xl leading-7 text-slate-400">
                  Share your idea, collaboration proposal, or business inquiry.
                  This form is styled for a premium experience and can be
                  connected to your backend later.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <motion.div whileFocus={{ scale: 1.01 }}>
                    <label className="mb-2 block text-sm text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-2xl border border-white/10 bg-[#0d1728]/80 px-5 py-4 text-white placeholder:text-slate-500 outline-none backdrop-blur-xl transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.01 }}>
                    <label className="mb-2 block text-sm text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-2xl border border-white/10 bg-[#0d1728]/80 px-5 py-4 text-white placeholder:text-slate-500 outline-none backdrop-blur-xl transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.01 }}>
                  <label className="mb-2 block text-sm text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-2xl border border-white/10 bg-[#0d1728]/80 px-5 py-4 text-white placeholder:text-slate-500 outline-none backdrop-blur-xl transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }}>
                  <label className="mb-2 block text-sm text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-[#0d1728]/80 px-5 py-4 text-white placeholder:text-slate-500 outline-none backdrop-blur-xl transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </motion.div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-semibold text-black shadow-[0_12px_40px_rgba(34,211,238,0.22)]"
                  >
                    Send Message
                  </motion.button>

                  <p className="text-sm text-slate-500">
                    Premium contact form UI — backend integration can be added.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;