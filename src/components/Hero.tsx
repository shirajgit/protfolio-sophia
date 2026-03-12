import { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";
import profile from "../assets/profile.png";

function Orb() {
  useFrame(({ camera }) => {
    camera.position.z = 5;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[2, 3, 2]} intensity={2} />
      <pointLight position={[-2, -2, 2]} intensity={2} color="#67e8f9" />

      <Float speed={1.8} rotationIntensity={1} floatIntensity={1.4}>
        <Sphere args={[1.1, 128, 128]} scale={1.55}>
          <MeshDistortMaterial
            color="#60a5fa"
            distort={0.35}
            speed={2}
            roughness={0.08}
            metalness={0.7}
            emissive={new THREE.Color("#1d4ed8")}
            emissiveIntensity={0.7}
          />
        </Sphere>
      </Float>
    </>
  );
}

function BackgroundScene() {
  return (
    <div className="absolute inset-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Orb />
        </Suspense>
      </Canvas>
    </div>
  );
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060b16] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.16),transparent_32%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <BackgroundScene />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 md:px-10 lg:px-2">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 max-w-3xl"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-cyan-300 backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.95)]" />
              Sophia Lacayo · CEO at Solasi
            </motion.div>

            <motion.p
              variants={item}
              className="mt-8 text-sm uppercase tracking-[0.35em] text-slate-400"
            >
              Executive Profile
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-5 text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-7xl xl:text-[6rem]"
            >
              Leading with
              <span className="block text-white/65">clarity, brand,</span>
              <span className="block bg-gradient-to-r from-cyan-200 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                and digital vision.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
            >
              Sophia Lacayo brings together business leadership, marketing
              strategy, and modern digital thinking to shape a stronger brand
              presence and long-term growth for Solasi.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#about"
                className="rounded-full bg-white px-7 py-3.5 font-semibold text-black shadow-[0_12px_40px_rgba(255,255,255,0.18)]"
              >
                Discover Profile
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                Let’s Connect
              </motion.a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-14 grid gap-4 sm:grid-cols-3"
            >
              {[
                ["Role", "CEO"],
                ["Focus", "Marketing"],
                ["Strength", "Digital Vision"],
              ].map(([label, value]) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -6 }}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20 backdrop-blur-2xl"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    {label}
                  </p>
                  <p className="mt-3 text-2xl font-bold text-white">{value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            {/* Floating mini card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-10 z-20 hidden rounded-3xl border border-white/10 bg-white/10 px-5 py-4 shadow-2xl shadow-black/30 backdrop-blur-2xl lg:block"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Expertise
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                Brand · Growth · Strategy
              </p>
            </motion.div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-4 shadow-[0_24px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-400/10" />

              <div className="grid gap-4">
                <motion.div
                  whileHover={{ y: -6, rotate: -0.6 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-[2rem] border border-white/10"
                >
                  <img
                    src={profile}
                    alt="Sophia Lacayo"
                    className="h-[600px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white backdrop-blur-xl">
                    CEO & Marketing Manager
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.7rem] border border-white/10 bg-black/35 p-5 backdrop-blur-2xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                      Solasi
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">Sophia Lacayo</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Blending leadership, communication, and strategic digital
                      direction into one modern executive identity.
                    </p>
                  </div>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="rounded-[1.6rem] border border-white/10 bg-[#0d1728]/80 p-5 backdrop-blur-xl"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      Technical Awareness
                    </p>
                    <p className="mt-3 text-base font-semibold text-white">
                      React · Ruby · Rust · FastAPI · WebSockets
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="rounded-[1.6rem] border border-white/10 bg-[#0d1728]/80 p-5 backdrop-blur-xl"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                      Core Strength
                    </p>
                    <p className="mt-3 text-base font-semibold text-white">
                      Leadership, branding, growth, and digital direction
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating mini card */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 right-2 z-20 hidden rounded-3xl border border-white/10 bg-white/10 px-5 py-4 shadow-2xl shadow-black/30 backdrop-blur-2xl lg:block"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Direction
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                Modern communication and brand growth
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;