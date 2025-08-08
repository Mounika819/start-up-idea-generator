import { useCallback, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiUpload, FiX } from 'react-icons/fi'

export default function Uploader({ onItemsChange }) {
  const [files, setFiles] = useState([])
  const inputRef = useRef(null)

  const onDrop = useCallback((event) => {
    event.preventDefault()
    event.stopPropagation()
    const dropped = Array.from(event.dataTransfer.files || [])
    handleFiles(dropped)
  }, [])

  const handleFiles = (fileList) => {
    const mapped = fileList.map((file, idx) => {
      const isVideo = file.type.startsWith('video')
      const url = URL.createObjectURL(file)
      return {
        id: `${file.name}-${file.size}-${idx}-${Date.now()}`,
        type: isVideo ? 'video' : 'image',
        src: url,
        title: file.name,
        file,
      }
    })
    const updated = [...files, ...mapped]
    setFiles(updated)
    onItemsChange?.(updated)
  }

  const onSelect = (event) => {
    const selected = Array.from(event.target.files || [])
    handleFiles(selected)
    // reset input so same file can be re-selected
    event.target.value = ''
  }

  const removeItem = (id) => {
    const updated = files.filter((f) => f.id !== id)
    setFiles(updated)
    onItemsChange?.(updated)
  }

  const preventDefaults = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const instructions = 'Drag and drop images or videos, or click to browse'

  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Upload Your Content</h2>
        <p className="mt-3 max-w-2xl text-balance text-slate-300">Add images, videos, reels, and vlogs. Preview before you post.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-dashed border-cyan-400/40 bg-slate-900/30 p-6"
      >
        <div
          className="grid place-items-center cursor-pointer rounded-xl px-6 py-12 text-center text-slate-300 hover:bg-slate-900/40"
          onDragEnter={preventDefaults}
          onDragOver={preventDefaults}
          onDragLeave={preventDefaults}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
        >
          <FiUpload className="text-3xl text-cyan-400 mb-3" />
          <p className="font-medium">{instructions}</p>
          <p className="mt-2 text-sm text-slate-400">PNG, JPG, MP4. Up to 100MB each.</p>
          <input
            ref={inputRef}
            type="file"
            multiple
            accept="image/*,video/*"
            className="hidden"
            onChange={onSelect}
          />
        </div>

        {files.length > 0 && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map((item) => (
              <div key={item.id} className="relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/40">
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute right-2 top-2 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white/90 hover:bg-black/80"
                  aria-label={`Remove ${item.title}`}
                >
                  <FiX />
                </button>
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.title} className="h-48 w-full object-cover" />
                ) : (
                  <video src={item.src} className="h-48 w-full object-cover" controls={false} muted playsInline loop />
                )}
                <div className="p-3">
                  <p className="truncate text-sm text-slate-300">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}