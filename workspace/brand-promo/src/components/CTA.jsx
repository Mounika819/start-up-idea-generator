import { motion } from 'framer-motion'

export default function CTA({ onStart }) {
  return (
    <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-600 via-indigo-600 to-fuchsia-600 bg-[length:200%_200%] animate-gradient-move opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Start Promoting Today</h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">Bring your brand to life with visuals and stories that resonate. It takes minutes to get going.</p>
        <div className="mt-8">
          <button onClick={onStart} className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:scale-[1.02] hover:bg-cyan-400 hover:shadow-cyan-500/30 active:scale-95 text-base">Start Promoting</button>
        </div>
      </motion.div>
    </div>
  )
}