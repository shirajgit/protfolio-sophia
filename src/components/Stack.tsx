import { motion } from "framer-motion";

const skills = [
  "Leadership",
  "Marketing Strategy",
  "Brand Growth",
  "React",
  "Ruby",
  "Rust",
  "FastAPI",
  "WebSockets",
  "Business Development",
  "Product Vision",
  "Communication",
  "Digital Strategy",
  "Innovation",
  "Team Direction",
];

const Stack = () => {
  return (
    <section id="expertise" className="relative overflow-hidden bg-[#060b16] text-white">

      {/* background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.14),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-8">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Expertise
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-5xl xl:text-6xl">
              Leadership,
              <span className="block bg-gradient-to-r from-cyan-200 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                marketing, and modern technology.
              </span>
            </h2>

            <p className="mt-6 text-slate-300 leading-8">
              Sophia Lacayo combines executive leadership, marketing direction,
              and modern digital awareness. Her approach focuses on building strong
              brand identity, guiding business growth, and using technology to
              support communication, innovation, and long-term strategy.
            </p>
          </div>

          <p className="max-w-xl leading-8 text-slate-400">
            With experience in business leadership and marketing, along with
            knowledge of modern web technologies, she understands both the
            strategic side and the digital execution side of building modern
            companies and products.
          </p>
        </motion.div>


        {/* main card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-12"
        >

          {/* skills */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="rounded-full border border-white/10 bg-[#0d1728]/80 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl transition hover:border-cyan-400/30 hover:text-cyan-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>


          {/* info blocks */}
          <div className="mt-12 grid gap-4 md:grid-cols-4">

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-[#0d1728]/80 p-5 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Position
              </p>
              <p className="mt-2 text-white font-semibold">
                CEO at Solasi
              </p>
            </motion.div>


            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-[#0d1728]/80 p-5 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Focus
              </p>
              <p className="mt-2 text-white font-semibold">
                Marketing & Brand Strategy
              </p>
            </motion.div>


            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-[#0d1728]/80 p-5 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Knowledge
              </p>
              <p className="mt-2 text-white font-semibold">
                Web & Digital Systems
              </p>
            </motion.div>


            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-[#0d1728]/80 p-5 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Approach
              </p>
              <p className="mt-2 text-white font-semibold">
                Strategy + Communication + Innovation
              </p>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Stack;