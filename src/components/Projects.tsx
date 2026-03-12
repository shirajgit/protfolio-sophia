 
import { motion } from "framer-motion";

const projects = [
  {
    title: "Brand & Digital Growth Strategy",
    desc: "Led strategic initiatives focused on brand visibility, digital positioning, and audience growth for Solasi.",
    tag: "Strategy",
  },
  {
    title: "Modern Web Experience",
    desc: "Worked on creating premium digital experiences with a strong focus on clean design, usability, and performance.",
    tag: "Digital",
  },
  {
    title: "Product & Business Leadership",
    desc: "Combined business direction with technical understanding to guide digital products from concept to execution.",
    tag: "Leadership",
  },
  {
    title: "Marketing & Communication Systems",
    desc: "Built and refined communication strategies that helped improve engagement, trust, and business presentation.",
    tag: "Marketing",
  },
  {
    title: "Tech-Driven Brand Presence",
    desc: "Used modern web technologies and product thinking to strengthen the company’s digital identity and impact.",
    tag: "Brand",
  },
  {
    title: "Innovation at Solasi",
    desc: "Focused on blending leadership, marketing, and technology to create scalable and modern digital opportunities.",
    tag: "Innovation",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#060b16] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.14),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Featured Work
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-5xl xl:text-6xl">
              Strategy, leadership,
              <span className="block bg-gradient-to-r from-cyan-200 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                and modern digital growth.
              </span>
            </h2>
          </div>

          <p className="max-w-xl leading-8 text-slate-400">
            A showcase of the direction, communication, and strategic thinking
            that help shape Solasi’s modern brand presence and digital identity.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -right-10 top-0 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />
              </div>

              {/* Preview area */}
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-[#0b1424] via-[#0d1728] to-[#050814] p-4">
                <div className="flex h-56 items-center justify-center rounded-[1.3rem] border border-dashed border-white/10 bg-white/[0.02]">
                  <div className="text-center">
                    <div className="mx-auto h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 ring-1 ring-white/10" />
                    <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-500">
                      {project.tag}
                    </p>
                  </div>
                </div>

                <div className="absolute left-4 top-4 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-300 backdrop-blur-xl">
                  {project.tag}
                </div>
              </div>

              {/* Content */}
              <div className="relative mt-6">
                <h3 className="text-2xl font-bold leading-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {project.desc}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <button className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/15">
                    View Details
                  </button>

                  <span className="text-sm text-slate-500 transition group-hover:text-slate-300">
                    Explore →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;