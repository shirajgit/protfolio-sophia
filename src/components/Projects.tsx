import React from 'react'

const Projects = () => {


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
    <div>
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
    </div>
  )
}

export default Projects
