import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

 
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

  



  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-yellow-300 selection:text-black">
 
      <Hero /> 
      <About/> 
      <Projects /> 

      

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
