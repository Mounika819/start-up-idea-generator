import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Ava Thompson',
    role: 'Founder, GlowCo',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    quote:
      'This platform transformed how we tell our brand story. Our engagement skyrocketed with reels and vlogs.',
  },
  {
    id: 't2',
    name: 'Liam Patel',
    role: 'CMO, PeakGear',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&auto=format&fit=crop',
    quote:
      'Uploading content is seamless, and the animations are gorgeous. Customers actually remember our campaigns.',
  },
  {
    id: 't3',
    name: 'Maya Chen',
    role: 'Brand Lead, Northbay',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop',
    quote:
      'A beautiful, responsive experience that made showcasing our identity effortless and impactful.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, 4500)
    return () => clearInterval(intervalRef.current)
  }, [])

  const current = TESTIMONIALS[index]

  const go = (dir) => {
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <div>
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">What Brands Say</h2>
          <p className="mt-3 max-w-2xl text-balance text-slate-300">Stories from creators and teams who promote their way.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button onClick={() => go(-1)} className="rounded-full border border-white/10 p-2 hover:bg-white/5"><FiChevronLeft /></button>
          <button onClick={() => go(1)} className="rounded-full border border-white/10 p-2 hover:bg-white/5"><FiChevronRight /></button>
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 text-center shadow-xl"
          >
            <img src={current.avatar} alt={current.name} className="mx-auto h-16 w-16 rounded-full object-cover" />
            <p className="mt-4 text-lg text-slate-200">“{current.quote}”</p>
            <p className="mt-3 font-semibold text-white">{current.name}</p>
            <p className="text-sm text-slate-400">{current.role}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 w-2 rounded-full ${i === index ? 'bg-cyan-400' : 'bg-slate-500'}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 sm:hidden flex items-center justify-center gap-2">
        <button onClick={() => go(-1)} className="rounded-full border border-white/10 p-2 hover:bg-white/5"><FiChevronLeft /></button>
        <button onClick={() => go(1)} className="rounded-full border border-white/10 p-2 hover:bg-white/5"><FiChevronRight /></button>
      </div>
    </div>
  )
}