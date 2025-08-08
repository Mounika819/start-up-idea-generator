import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function useCountUp(target, durationMs = 1500, startWhenVisibleRef) {
  const [value, setValue] = useState(0)
  const rafRef = useRef()
  const startedRef = useRef(false)

  useEffect(() => {
    const node = startWhenVisibleRef?.current
    if (!node) return
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !startedRef.current) {
        startedRef.current = true
        const startTs = performance.now()
        const tick = (now) => {
          const progress = Math.min(1, (now - startTs) / durationMs)
          setValue(Math.floor(target * progress))
          if (progress < 1) rafRef.current = requestAnimationFrame(tick)
        }
        rafRef.current = requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })

    observer.observe(node)
    return () => {
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [target, durationMs, startWhenVisibleRef])

  return value
}

export default function Stats() {
  const ref = useRef(null)
  const brands = useCountUp(1250, 1500, ref)
  const audience = useCountUp(3200000, 1800, ref)
  const campaigns = useCountUp(540, 1600, ref)

  const stats = [
    { label: 'Brands Promoted', value: brands.toLocaleString() },
    { label: 'Audience Reached', value: audience.toLocaleString() },
    { label: 'Campaigns Run', value: campaigns.toLocaleString() },
  ]

  return (
    <div ref={ref}>
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Impact at a Glance</h2>
        <p className="mt-3 max-w-2xl text-balance text-slate-300">Numbers that grow with every story shared.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 text-center shadow-lg"
          >
            <div className="text-4xl font-extrabold text-white">{s.value}</div>
            <div className="mt-2 text-slate-400">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}