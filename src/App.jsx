import React, { useState } from 'react';
import { Rocket, ShieldCheck, Zap, Globe, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between p-6">
      
      {/* Header */}
      <header className="max-w-5xl w-full mx-auto flex items-center justify-between py-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-indigo-600 rounded-xl text-white shadow-lg">
            <Rocket className="w-6 h-6 animate-pulse" />
          </div>
          <span className="font-extrabold text-xl tracking-wide bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            TEST 5656 PROTOCOL
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Live & Verified
          </span>
        </div>
      </header>

      {/* Main Hero Card */}
      <main className="max-w-3xl w-full mx-auto my-12 bg-slate-900/60 border border-slate-800 rounded-2xl p-8 backdrop-blur-xl text-center shadow-2xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" /> Official Release 5656
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Next-Gen High-Speed Web Infrastructure
        </h1>

        <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
          Connected to GitHub repository <code className="text-indigo-400 bg-slate-800 px-2 py-0.5 rounded">TrillionaireViier/test5656</code> and deployed live on Vercel Edge servers.
        </p>

        {/* Counter Action */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setCount(c => c + 1)}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5" />
            <span>Interactive Impulse ({count})</span>
          </button>

          <a
            href="https://github.com/TrillionaireViier/test5656"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <Globe className="w-5 h-5 text-slate-400" />
            <span>GitHub Repository</span>
          </a>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-left">
          <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
            <ShieldCheck className="w-5 h-5 text-indigo-400 mb-2" />
            <div className="font-bold text-sm text-white">Edge Security</div>
            <div className="text-xs text-slate-400 mt-0.5">TLS encryption & ultra-fast CDN</div>
          </div>
          <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 mb-2" />
            <div className="font-bold text-sm text-white">Automated CI/CD</div>
            <div className="text-xs text-slate-400 mt-0.5">Instant deployment on git push</div>
          </div>
          <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/80">
            <Rocket className="w-5 h-5 text-emerald-400 mb-2" />
            <div className="font-bold text-sm text-white">Optimized React 19</div>
            <div className="text-xs text-slate-400 mt-0.5">Sub-millisecond render time</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl w-full mx-auto text-center py-4 border-t border-slate-800 text-xs text-slate-500">
        © 2026 TrillionaireViier. Project <code className="text-slate-400">test5656</code> live on Vercel.
      </footer>
    </div>
  );
}
