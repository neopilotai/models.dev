import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Models.dev</h1>
          <p className="text-xl text-slate-300 mb-8">A comprehensive open-source database of AI model specifications, pricing, and capabilities</p>
          
          <div className="flex gap-4 justify-center">
            <Link 
              href="/models"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              Browse Models
            </Link>
            <Link 
              href="/api"
              className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition"
            >
              API Documentation
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-2">Comprehensive</h3>
            <p className="text-slate-400">Access data on hundreds of AI models from various providers in one place</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-2">Up-to-Date</h3>
            <p className="text-slate-400">Community-maintained database with pricing, capabilities, and specifications</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-2">Open Source</h3>
            <p className="text-slate-400">Contribute to the project on GitHub and help keep the data accurate</p>
          </div>
        </div>
      </div>
    </main>
  )
}
