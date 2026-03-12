 
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
};

const highlights = [
  "CEO at Solasi",
  "Marketing leadership and brand strategy",
  "Strong business communication and growth mindset",
  "Awareness of React, Ruby, Rust, FastAPI, and WebSockets",
  "Blends strategy, communication, and digital thinking",
];

const cards = [
  {
    title: "Executive Leadership",
    desc: "Guiding business direction, long-term growth, and strategic decision-making with clarity and purpose.",
  },
  {
    title: "Marketing Strategy",
    desc: "Building stronger brand presence, communication systems, and digital positioning.",
  },
  {
    title: "Technical Awareness",
    desc: "Understanding modern technologies and digital systems that support scalable business experiences.",
  },
  {
    title: "Product Vision",
    desc: "Connecting business goals with modern execution, usability, and digital opportunity.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#060b16] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.14),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-8">
        {/* Top heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">
            About Sophia
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-5xl xl:text-6xl">
            Leadership, brand,
            <span className="block bg-gradient-to-r from-cyan-200 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              and modern digital direction.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Sophia Lacayo brings together executive leadership, marketing
            strategy, and practical digital awareness. As CEO of Solasi, she
            focuses on business direction, communication, brand growth, and
            building modern opportunities that create long-term impact.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left big content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85 }}
            className="rounded-[2.2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  What she brings
                </p>
                <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                  Business clarity with modern awareness
                </h3>
              </div>

              <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                Executive Profile
              </div>
            </div>

            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              With experience in leadership and marketing, along with awareness
              of technologies like React, Ruby, Rust, FastAPI, and WebSockets,
              Sophia understands both the business side and the digital side of
              building modern brands, products, and communication systems.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[1.7rem] border border-white/10 bg-[#0d1728]/80 p-5 shadow-xl shadow-black/20 backdrop-blur-xl transition"
                >
                  <div className="mb-4 h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 ring-1 ring-white/10" />
                  <p className="text-lg font-semibold text-white">{card.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right highlights panel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-indigo-500/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-10"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
              Highlights
            </p>

            <h3 className="mt-4 text-2xl font-bold md:text-3xl">
              A profile shaped by strategy and growth
            </h3>

            <div className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-black/20 p-4 text-slate-200 backdrop-blur-xl"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                  <span className="leading-7">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-[#0d1728]/70 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Core Approach
              </p>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Combining leadership, communication, and digital understanding
                to guide stronger brand identity and modern business growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;