import { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Uploader from './components/Uploader'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const showcaseRef = useRef(null)
  const uploadRef = useRef(null)
  const statsRef = useRef(null)
  const testimonialsRef = useRef(null)
  const ctaRef = useRef(null)

  const [items, setItems] = useState([])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar
        sections={{
          showcase: showcaseRef,
          upload: uploadRef,
          stats: statsRef,
          testimonials: testimonialsRef,
          cta: ctaRef,
        }}
      />
      <main>
        <Hero onGetStarted={() => uploadRef.current?.scrollIntoView({ behavior: 'smooth' })} />

        <section ref={showcaseRef} id="showcase" className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Showcase items={items} />
          </div>
        </section>

        <section ref={uploadRef} id="upload" className="py-20 bg-slate-900/40">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Uploader onItemsChange={setItems} />
          </div>
        </section>

        <section ref={statsRef} id="stats" className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Stats />
          </div>
        </section>

        <section ref={testimonialsRef} id="testimonials" className="py-20 bg-slate-900/40">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Testimonials />
          </div>
        </section>

        <section ref={ctaRef} id="cta" className="py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <CTA onStart={() => uploadRef.current?.scrollIntoView({ behavior: 'smooth' })} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
