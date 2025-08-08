import { FaBullhorn } from 'react-icons/fa'

const NavLink = ({ href, children }) => (
  <a href={href} className="text-slate-200 hover:text-white transition-colors">
    {children}
  </a>
)

export default function Navbar({ sections }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2">
          <FaBullhorn className="text-cyan-400 text-2xl" />
          <span className="font-bold">BrandPromo</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#showcase">Showcase</NavLink>
          <NavLink href="#upload">Upload</NavLink>
          <NavLink href="#stats">Stats</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:scale-[1.02] hover:bg-cyan-400 hover:shadow-cyan-500/30 active:scale-95 text-sm">Start Promoting</a>
        </nav>
      </div>
    </header>
  )
}