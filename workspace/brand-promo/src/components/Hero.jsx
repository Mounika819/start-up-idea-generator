import { motion } from 'framer-motion'

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 bg-[length:200%_200%] animate-gradient-move opacity-20"
      />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-36">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Promote Your Brand. Your Way.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-3 max-w-2xl text-balance text-slate-300"
          >
            Showcase your products, services, and identity with images, videos, reels, vlogs, and text. Engage your audience with modern animations and a stunning, responsive layout.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <button onClick={onGetStarted} className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:scale-[1.02] hover:bg-cyan-400 hover:shadow-cyan-500/30 active:scale-95">Get Started</button>
            <a href="#showcase" className="text-cyan-400 hover:text-cyan-300 transition">See Showcase</a>
          </motion.div>
        </div>

        <div className="relative mt-16">
          <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-video w-full rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl"
          >
            <div className="grid h-full w-full place-items-center text-center p-6 text-slate-300">
              <p className="max-w-xl">
                Drop in a background video or enjoy the animated gradient. Everything is designed to make your brand shine.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}