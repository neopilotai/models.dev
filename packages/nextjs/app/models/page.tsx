'use client'

import { useEffect, useState } from 'react'

interface Model {
  id: string
  name: string
  provider: string
  cost?: {
    input: number
    output: number
  }
}

export default function ModelsPage() {
  const [models, setModels] = useState<Model[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchModels = async () => {
      try {
        // Fetch from the API
        const response = await fetch('https://models.dev/api.json')
        if (!response.ok) throw new Error('Failed to fetch models')
        
        const data = await response.json()
        setModels(data.slice(0, 20)) // Show first 20 for now
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchModels()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">AI Models Directory</h1>

        {loading && (
          <div className="text-center py-12">
            <p className="text-slate-400">Loading models...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-900/20 border border-red-700 text-red-200 p-4 rounded-lg mb-8">
            Error: {error}
          </div>
        )}

        {!loading && models.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <div
                key={model.id}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{model.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{model.provider}</p>
                {model.cost && (
                  <div className="text-xs text-slate-500">
                    <p>Input: ${model.cost.input}/M tokens</p>
                    <p>Output: ${model.cost.output}/M tokens</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
