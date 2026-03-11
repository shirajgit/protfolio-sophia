 import profile from "./assets/profile.png";

 import { motion } from "framer-motion";

function FloatingParticles() {
  const particles = Array.from({ length: 18 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = i % 3 === 0 ? 10 : i % 3 === 1 ? 6 : 4;
        const left = `${(i * 13) % 100}%`;
        const duration = 8 + (i % 5);
        const delay = i * 0.25;

        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-yellow-300/20 blur-[1px]"
            style={{
              width: size,
              height: size,
              left,
              top: `${(i * 17) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 12 : -12, 0],
              opacity: [0.15, 0.5, 0.15],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

function AnimatedCounter({
  value,
  suffix = "",
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20 backdrop-blur-2xl"
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-3xl font-black text-yellow-300"
      >
        {value}
        {suffix}
      </motion.p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
    </motion.div>
  );
}

export default function PortfolioHomepage() {
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
  ];

  const projects = [
    {
      title: "Brand & Digital Growth Strategy",
      desc: "Led strategic initiatives focused on brand visibility, digital positioning, and audience growth for Solasi.",
    },
    {
      title: "Modern Web Experience",
      desc: "Worked on creating premium digital experiences with a strong focus on clean design, usability, and performance.",
    },
    {
      title: "Product & Business Leadership",
      desc: "Combined business direction with technical understanding to guide digital products from concept to execution.",
    },
    {
      title: "Marketing & Communication Systems",
      desc: "Built and refined communication strategies that helped improve engagement, trust, and business presentation.",
    },
    {
      title: "Tech-Driven Brand Presence",
      desc: "Used modern web technologies and product thinking to strengthen the company’s digital identity and impact.",
    },
    {
      title: "Innovation at Solasi",
      desc: "Focused on blending leadership, marketing, and technology to create scalable and modern digital opportunities.",
    },
  ];



  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-yellow-300 selection:text-black">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#020617]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.16),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.10),transparent_25%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px] opacity-[0.06]" />
      <div className="absolute left-[-6rem] top-16 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute right-[-8rem] top-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <FloatingParticles />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-24 lg:py-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-white/5 px-4 py-2 text-sm font-medium text-yellow-300 shadow-lg shadow-yellow-500/10 backdrop-blur-2xl"
          >
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-yellow-300 shadow-[0_0_14px_rgba(253,224,71,0.9)]"
              animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            CEO & Marketing Manager at Solasi
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-5xl font-black leading-[0.9] tracking-[-0.05em] text-white md:text-7xl xl:text-[6rem]"
          >
            Building
            <span className="block bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              vision into
            </span>
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300 bg-clip-text text-transparent">
              modern impact.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
          >
            Sophia Lacayo leads Solasi with a focus on business growth, brand
            direction, and digital innovation. Blending executive leadership,
            marketing strategy, and technical awareness, she helps shape modern
            experiences that feel premium, strategic, and future-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center rounded-2xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300 px-7 py-3.5 font-semibold text-black shadow-[0_10px_30px_rgba(250,204,21,0.25)]"
            >
              Explore Work
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-2xl transition duration-300 hover:border-white/25 hover:bg-white/10"
            >
              About Sophia
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {skills.slice(0, 6).map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.55 + index * 0.06 }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-md shadow-black/10 backdrop-blur-xl transition duration-300 hover:border-yellow-400/20 hover:bg-white/10 hover:text-white"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            <AnimatedCounter value="8+" label="Years in leadership and brand-focused growth." />
            <AnimatedCounter value="25+" label="Strategic campaigns and business initiatives." />
            <AnimatedCounter value="10+" label="Tech domains and digital systems understood." />
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          {/* Glow layers */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute h-[24rem] w-[24rem] rounded-full border border-yellow-400/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute h-[30rem] w-[30rem] rounded-full border border-white/10 opacity-40"
          />
          <div className="absolute h-[36rem] w-[36rem] rounded-full border border-white/5 opacity-20" />

          {/* Floating info top */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-10 z-20 hidden -translate-x-8 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl lg:block"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Leadership
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Business • Marketing • Innovation
            </p>
          </motion.div>

          {/* Main image */}
          <motion.div
            whileHover={{ y: -8, rotate: -1 }}
            transition={{ duration: 0.35 }}
            className="relative z-10 overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-yellow-400/10" />

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10">
              <motion.img
                src={profile}
                alt="Sophia Lacayo"
                className="h-[440px] w-[320px] object-cover md:h-[560px] md:w-[400px]"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-slate-100 shadow-lg backdrop-blur-2xl"
              >
                Sophia Lacayo
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.78 }}
                className="absolute bottom-4 left-4 right-4 rounded-[1.3rem] border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-2xl"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-yellow-300">
                  Solasi
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  CEO & Marketing Manager
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Driving strategy, growth, brand presence, and modern digital vision.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating info bottom */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 right-0 z-20 hidden translate-x-8 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl lg:block"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Expertise
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              React • Ruby • Rust • FastAPI
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
            About Sophia
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Leadership, marketing, and digital innovation
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            Sophia Lacayo brings together executive leadership, marketing
            strategy, and a practical understanding of web technologies. As CEO
            of Solasi, she focuses on business direction, communication, brand
            presence, and building modern digital opportunities that create real impact.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20 backdrop-blur-2xl">
            <h3 className="text-2xl font-semibold">What she brings</h3>
            <p className="mt-4 leading-8 text-slate-300">
              With experience in leadership and marketing, along with knowledge
              of modern development tools like React, Ruby, Rust, FastAPI, and
              WebSockets, she understands both the business side and the digital
              execution side of building modern products and brands.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="font-semibold text-white">Executive Leadership</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Driving company vision, growth, and long-term direction.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="font-semibold text-white">Marketing Strategy</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Building strong brand identity and communication systems.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="font-semibold text-white">Technical Awareness</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Familiar with modern web development and scalable technologies.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="font-semibold text-white">Product Vision</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Aligning business goals with digital product execution.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-yellow-400/10 via-white/5 to-cyan-400/10 p-8 shadow-xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.25em] text-yellow-300">
              Highlights
            </p>
            <div className="mt-6 space-y-4">
              {[
                "CEO at Solasi",
                "Marketing Manager at Solasi",
                "Strong business and brand leadership",
                "Knowledge of React, Ruby, Rust, FastAPI, and WebSockets",
                "Blends strategy, communication, and technology",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-slate-200 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Strategy, leadership, and digital growth
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-slate-400">
            A showcase of the leadership, marketing direction, and digital
            thinking that shape Solasi’s modern presence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1.5 hover:border-yellow-400/30 hover:bg-white/[0.07]"
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl" />
              </div>

              <div className="relative h-56 overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-4">
                <div className="flex h-full items-center justify-center rounded-[1.2rem] border border-dashed border-white/10 text-sm text-slate-500">
                  Project preview image
                </div>
              </div>

              <div className="relative">
                <h3 className="mt-6 text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.desc}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <button className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-300 transition hover:bg-yellow-400/15">
                    View Details
                  </button>

                  <span className="text-sm text-slate-500 transition group-hover:text-slate-300">
                    Explore →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20 backdrop-blur-2xl md:p-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
                Expertise
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                Leadership meets technology
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-slate-400">
              A blend of business strategy, marketing leadership, and modern web
              technology awareness used to shape impactful digital experiences.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 transition hover:border-yellow-400/20 hover:text-yellow-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-white/5 to-cyan-400/10 p-8 shadow-2xl shadow-yellow-500/10 md:p-12">
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
              Contact
            </p>
            <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">
              Let’s build something impactful together
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Connect with Sophia Lacayo to discuss leadership, partnerships,
              marketing strategy, digital growth, and modern business opportunities through Solasi.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-2xl bg-yellow-400 px-6 py-3.5 font-semibold text-black shadow-lg shadow-yellow-500/20 transition hover:-translate-y-0.5"
              >
                Contact Sophia
              </a>
              <a
                href="#projects"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
