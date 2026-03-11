 import profile from "./assets/profile.png";

export default function PortfolioHomepage() {
  const skills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "Three.js",
    "React Three Fiber",
    "Framer Motion",
    "Node.js",
    "MongoDB",
    "Figma",
  ];

  const projects = [
    {
      title: "3D Portfolio Website",
      desc: "An immersive personal portfolio with premium UI, smooth motion, and interactive 3D presentation.",
    },
    {
      title: "Startup Landing Page",
      desc: "A conversion-focused landing page with strong branding, polished layout, and responsive design.",
    },
    {
      title: "Dashboard UI System",
      desc: "A modern admin dashboard concept with analytics cards, charts, and clean component structure.",
    },
    {
      title: "E-Commerce Frontend",
      desc: "A stylish storefront experience focused on product presentation, filters, and user-friendly flow.",
    },
    {
      title: "Agency Website",
      desc: "A sleek agency website built to communicate services, trust, and premium digital presence.",
    },
    {
      title: "Product Showcase",
      desc: "A modern product presentation page with strong visual hierarchy and interactive sections.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-yellow-300 selection:text-black">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.14),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.07),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute right-[-6rem] bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.08]" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-14 md:px-10 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-1.5 text-sm font-medium text-yellow-300 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-yellow-300" />
              CEO at Solasi
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[0.92] tracking-[-0.04em] md:text-7xl xl:text-[5.5rem]">
              Hi, I’m
              <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-300 bg-clip-text text-transparent">
             Sophia Lacayo
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I build modern web experiences with strong frontend visuals,
              clean backend logic, and real-world product thinking. This
              portfolio is designed to feel premium, interactive, and memorable.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center rounded-2xl bg-yellow-400 px-6 py-3.5 font-semibold text-black shadow-lg shadow-yellow-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-yellow-400/30"
              >
                Explore Work
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#about"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-white/25 hover:bg-white/10"
              >
                About Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.slice(0, 6).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md transition hover:border-yellow-400/20 hover:bg-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-2xl font-bold text-yellow-300">MERN</p>
                <p className="mt-1 text-sm text-slate-400">Full stack apps</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-2xl font-bold text-yellow-300">UI</p>
                <p className="mt-1 text-sm text-slate-400">Modern clean design</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-2xl font-bold text-yellow-300">Code</p>
                <p className="mt-1 text-sm text-slate-400">Scalable structure</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl" />
            <div className="absolute h-[26rem] w-[26rem] rounded-full border border-yellow-400/20" />
            <div className="absolute h-[30rem] w-[30rem] rounded-full border border-white/5" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <img
                src={profile}
                alt="Shiraj Mujawar"
                className="h-[420px] w-[320px] rounded-[1.5rem] object-cover md:h-[520px] md:w-[380px]"
              />

              <div className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
                Shiraj Mujawar
              </div>

              <div className="absolute bottom-4 right-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-slate-300 backdrop-blur-xl">
                MERN Stack Developer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
            About Me
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Building clean products with strong visuals
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            I focus on creating modern interfaces, smooth user experiences, and
            practical full stack solutions. I enjoy turning ideas into polished,
            real-world digital products.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20 backdrop-blur-2xl">
            <h3 className="text-2xl font-semibold">What I bring</h3>
            <p className="mt-4 leading-8 text-slate-300">
              I combine frontend creativity with backend understanding, which
              helps me build websites and applications that not only look good
              but also work well in real use cases.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="font-semibold text-white">Modern UI</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Clean interfaces with strong visual hierarchy.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="font-semibold text-white">Frontend Focus</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Responsive and interactive web experiences.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="font-semibold text-white">Backend Logic</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  APIs, authentication, and data-driven features.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="font-semibold text-white">Product Thinking</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  I build with usability and growth in mind.
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
                "Premium hero section with your profile picture",
                "Modern glassmorphism card design",
                "Clean section spacing and layout",
                "Strong personal branding look",
                "Portfolio ready for customization",
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
              Featured Projects
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Work that looks clean and premium
            </h2>
          </div>

          <p className="max-w-xl leading-7 text-slate-400">
            Replace these project cards with your real work, GitHub links, case
            studies, and screenshots.
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
                    View Project
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
                Stack
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                Tech I work with
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-slate-400">
              A modern mix of frontend tools, backend technologies, and design
              systems used to create polished digital products.
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
              Let’s build something modern together
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              You can now replace this section with your GitHub, LinkedIn, email,
              WhatsApp, resume link, and any call-to-action you want.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-2xl bg-yellow-400 px-6 py-3.5 font-semibold text-black shadow-lg shadow-yellow-500/20 transition hover:-translate-y-0.5"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
