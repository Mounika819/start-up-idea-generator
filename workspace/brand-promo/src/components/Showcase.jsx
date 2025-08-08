import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal'

const demoItems = [
  { id: 'd1', type: 'image', src: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop', title: 'Product Spotlight' },
  { id: 'd2', type: 'image', src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop', title: 'Lifestyle Brand' },
  { id: 'd3', type: 'image', src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop', title: 'Street Campaign' },
  { id: 'd4', type: 'image', src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop', title: 'Minimal Aesthetic' },
  { id: 'd5', type: 'image', src: 'https://images.unsplash.com/photo-1542293771-5333b5176c47?q=80&w=1200&auto=format&fit=crop', title: 'Outdoor Activation' },
]

export default function Showcase({ items }) {
  const [active, setActive] = useState(null)

  const content = useMemo(() => {
    if (items && items.length > 0) return items
    return demoItems
  }, [items])

  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Brand Showcase</h2>
        <p className="mt-3 max-w-2xl text-balance text-slate-300">Explore visual stories from brands just like yours. Hover to preview and click to expand.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActive(item)}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-lg"
          >
            {item.type === 'image' && (
              <img src={item.src} alt={item.title || 'Brand item'} className="h-60 w-full object-cover transition duration-300 group-hover:scale-105" />
            )}
            {item.type === 'video' && (
              <video src={item.src} className="h-60 w-full object-cover" muted playsInline loop onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => e.currentTarget.pause()} />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            {item.title && (
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <p className="font-semibold text-white drop-shadow">{item.title}</p>
              </div>
            )}
          </motion.button>
        ))}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            {active.type === 'image' && (
              <img src={active.src} alt={active.title || 'Preview'} className="w-full h-[70vh] object-contain bg-black" />
            )}
            {active.type === 'video' && (
              <video src={active.src} controls className="w-full h-[70vh] object-contain bg-black" />
            )}
            {active.title && (
              <div className="p-4 border-t border-white/10">
                <p className="font-semibold text-white">{active.title}</p>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  )
}