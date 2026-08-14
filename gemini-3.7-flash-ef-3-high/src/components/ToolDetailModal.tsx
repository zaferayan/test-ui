import React, { useState } from 'react';
import { X, ExternalLink, Copy, Check, Terminal, Layers } from 'lucide-react';
import { EcosystemTool } from './EcosystemSection';

interface ToolDetailModalProps {
  tool: EcosystemTool | null;
  onClose: () => void;
}

export const ToolDetailModal: React.FC<ToolDetailModalProps> = ({ tool, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!tool) return null;

  const handleCopyNpm = () => {
    navigator.clipboard.writeText(tool.npmCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-sky-100 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-500 to-[#0284c7] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-2xl shadow-md">
              {tool.logo}
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full text-white">
                {tool.category}
              </span>
              <h3 className="text-2xl font-black mt-1">{tool.name}</h3>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Açıklama</h4>
            <p className="text-slate-700 text-sm font-medium leading-relaxed">
              {tool.description}
            </p>
          </div>

          {/* Quick Install Terminal Box */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-sky-600" /> Kurulum Komutu
            </h4>
            <div className="flex items-center justify-between bg-slate-900 text-emerald-400 font-mono text-xs p-3 rounded-xl border border-slate-800">
              <span className="truncate mr-2">{tool.npmCommand}</span>
              <button
                onClick={handleCopyNpm}
                className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-lg text-[11px] transition-colors flex-shrink-0"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Kopyalandı' : 'Kopyala'}</span>
              </button>
            </div>
          </div>

          {/* Key Features Bullet Points */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-sky-600" /> Öne Çıkan Özellikler
            </h4>
            <ul className="space-y-2">
              {tool.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between">
          <a
            href={tool.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] hover:text-[#0369a1] hover:underline"
          >
            <span>Resmi Dokümantasyon</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-semibold transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
