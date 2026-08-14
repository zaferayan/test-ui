import React, { useState } from 'react';
import { X, Code2, BookOpen, Check, Copy } from 'lucide-react';
import { CoreFeatureItem } from './CoreFeatures';

interface FeatureExplorationModalProps {
  feature: CoreFeatureItem | null;
  onClose: () => void;
}

export const FeatureExplorationModal: React.FC<FeatureExplorationModalProps> = ({ feature, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [demoCount, setDemoCount] = useState(0);

  if (!feature) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(feature.exampleSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-sky-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0284c7] to-cyan-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full text-white">
            {feature.badge}
          </span>
          <h3 className="text-2xl font-black mt-1.5">{feature.title}</h3>
          <p className="text-sky-100 text-xs sm:text-sm mt-1">
            {feature.description}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* Deep explanation */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-sky-600" /> Detaylı Bilgi
            </h4>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70">
              {feature.deepExplanation}
            </p>
          </div>

          {/* Interactive Micro-Widget based on feature */}
          {feature.id === 'state-props' && (
            <div className="p-4 bg-sky-50 rounded-2xl border border-sky-200 text-center">
              <h5 className="text-xs font-bold text-sky-800 uppercase mb-2">Canlı State Deneyimi</h5>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setDemoCount(demoCount - 1)}
                  className="w-8 h-8 rounded-full bg-white shadow text-sky-700 font-bold hover:bg-sky-100 text-base"
                >
                  -
                </button>
                <span className="text-2xl font-black text-sky-900 min-w-[50px]">{demoCount}</span>
                <button
                  onClick={() => setDemoCount(demoCount + 1)}
                  className="w-8 h-8 rounded-full bg-[#0284c7] shadow text-white font-bold hover:bg-[#0369a1] text-base"
                >
                  +
                </button>
              </div>
              <p className="text-[11px] text-sky-600 mt-2">
                Tıklama anında <code>setDemoCount</code> çağrılır ve bileşen güncellenir.
              </p>
            </div>
          )}

          {/* Code Snippet Box */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-sky-600" /> Kod Örneği
              </h4>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-[11px] font-medium text-sky-600 hover:text-sky-800"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Kopyalandı' : 'Kopyala'}</span>
              </button>
            </div>
            
            <div className="bg-slate-900 rounded-2xl p-4 font-mono text-xs text-slate-200 overflow-x-auto border border-slate-800 shadow-inner">
              <pre className="text-[12px] leading-relaxed text-sky-300">
                {feature.exampleSnippet}
              </pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-xl text-xs font-semibold shadow transition-colors"
          >
            Anladım
          </button>
        </div>
      </div>
    </div>
  );
};
