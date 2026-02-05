import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white hover:text-slate-200">
          Models.dev
        </Link>
        
        <nav className="flex gap-6">
          <Link href="/models" className="text-slate-300 hover:text-white transition">
            Models
          </Link>
          <Link href="/api" className="text-slate-300 hover:text-white transition">
            API
          </Link>
          <a 
            href="https://github.com/neopilotai/models.dev" 
            className="text-slate-300 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
