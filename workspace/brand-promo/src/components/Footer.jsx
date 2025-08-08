import { FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-semibold text-white">BrandPromo</p>
            <p className="mt-1 text-sm text-slate-400">Contact: hello@brandpromo.example</p>
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <a href="#" className="text-slate-300 hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="text-slate-300 hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="text-slate-300 hover:text-white transition"><FaYoutube /></a>
            <a href="#" className="text-slate-300 hover:text-white transition"><FaTiktok /></a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} BrandPromo. All rights reserved.</p>
      </div>
    </footer>
  )
}