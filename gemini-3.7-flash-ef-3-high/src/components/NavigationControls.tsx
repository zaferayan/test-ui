import React from 'react';
import { Printer, Sparkles, Layout, Monitor } from 'lucide-react';
import confetti from 'canvas-confetti';

interface NavigationControlsProps {
  viewMode: 'poster' | 'app';
  setViewMode: (mode: 'poster' | 'app') => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  viewMode,
  setViewMode
}) => {
  const handlePrint = () => {
    window.print();
  };

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.2 },
      colors: ['#00d8ff', '#0284c7', '#38bdf8', '#fbbf24', '#f43f5e']
    });
  };

  return (
    <header className="no-print sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-sky-100 shadow-sm transition-all mb-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Left: Brand / Title indicator */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0284c7] to-[#00d8ff] flex items-center justify-center shadow-sm">
            <span className="text-white font-black text-sm">R</span>
          </div>
          <div>
            <h1 className="text-sm font-black text-slate-800 leading-none">
              React.js İnfografik
            </h1>
            <span className="text-[10px] text-sky-600 font-medium">
              Web Arayüz Rehberi
            </span>
          </div>
        </div>

        {/* Center: Mode Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setViewMode('poster')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'poster'
                ? 'bg-white text-[#0284c7] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Orijinal görseldeki infografik afiş düzeni"
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Afiş Görünümü</span>
          </button>
          
          <button
            onClick={() => setViewMode('app')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'app'
                ? 'bg-white text-[#0284c7] shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
            title="Genişletilmiş interaktif web uygulaması düzeni"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>İnteraktif Mod</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleConfetti}
            className="p-2 text-amber-500 hover:bg-amber-50 rounded-xl transition-colors"
            title="Kutlama"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-xl text-xs font-bold shadow-sm transition-all"
            title="PDF / Yazdır"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Yazdır / PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
