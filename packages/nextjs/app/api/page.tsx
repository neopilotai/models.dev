export default function APIPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">API Documentation</h1>

        <div className="space-y-8">
          <section className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
            <p className="text-slate-300 mb-4">Access the comprehensive Models.dev database through our simple REST API.</p>
            
            <div className="bg-slate-900/50 border border-slate-600 rounded p-4 mb-4">
              <p className="text-slate-300 font-mono text-sm">
                GET https://models.dev/api.json
              </p>
            </div>

            <p className="text-slate-400 text-sm">Returns a JSON array of all available AI models with their specifications, pricing, and capabilities.</p>
          </section>

          <section className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Response Format</h2>
            <p className="text-slate-300 mb-4">Each model object contains:</p>
            
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>id</strong>: Unique identifier (used by AI SDK)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>name</strong>: Display name of the model</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>provider</strong>: AI model provider</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>cost</strong>: Pricing for input/output tokens</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span><strong>capabilities</strong>: Supported features (tool calling, structured output, etc.)</span>
              </li>
            </ul>
          </section>

          <section className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Provider Logos</h2>
            <p className="text-slate-300 mb-4">Provider logos are available as SVG files:</p>
            
            <div className="bg-slate-900/50 border border-slate-600 rounded p-4">
              <p className="text-slate-300 font-mono text-sm">
                GET https://models.dev/logos/{'{'}{provider}{'}'}.svg
              </p>
            </div>

            <p className="text-slate-400 text-sm mt-4">Example: Replace {'{provider}'} with provider ID (e.g., anthropic, openai, google)</p>
          </section>

          <section className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contributing</h2>
            <p className="text-slate-300">Models.dev is community-maintained. You can contribute by:</p>
            
            <ul className="space-y-2 text-slate-400 text-sm mt-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">1.</span>
                <span>Adding new model data</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">2.</span>
                <span>Updating pricing and specifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">3.</span>
                <span>Submitting pull requests on GitHub</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
