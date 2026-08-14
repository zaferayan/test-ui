import React, { useState } from 'react';
import { Copy, Check, Sparkles, RefreshCw, Edit3, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractiveCodePlayground: React.FC = () => {
  // Playground State for interactive customization
  const [greetingText, setGreetingText] = useState('Merhaba Dünya! 👋');
  const [textColor, setTextColor] = useState('#61dafb');
  const [fontSize, setFontSize] = useState(20);
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#61dafb', '#00d8ff', '#38bdf8', '#0284c7', '#fcd34d']
    });
  };

  const codeString = `import React from 'react';

function MerhabaDunya() {
  return (
    <div style={{ color: '${textColor}',
                  fontSize: '${fontSize}px' }}>
      ${greetingText}
    </div>
  );
}

export default MerhabaDunya;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setGreetingText('Merhaba Dünya! 👋');
    setTextColor('#61dafb');
    setFontSize(20);
  };

  return (
    <div className="bg-[#eef7fc] rounded-2xl p-6 sm:p-7 border border-sky-100/90 shadow-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          BASİT BİR REACT BİLEŞENİ
        </h2>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-all ${
              isEditing
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-sky-600 border border-slate-200'
            }`}
            title="Kodu ve çıktıyı canlı düzenleyin"
          >
            {isEditing ? <Eye className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
            <span>{isEditing ? 'Önizleme Modu' : 'Canlı Düzenle'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Controls Bar when Editing is enabled */}
      {isEditing && (
        <div className="mb-3 p-3 bg-white/90 rounded-xl border border-sky-200 shadow-sm text-xs space-y-2 animate-fadeIn">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-1 min-w-[180px]">
              <span className="font-semibold text-slate-700">Metin:</span>
              <input
                type="text"
                value={greetingText}
                onChange={(e) => setGreetingText(e.target.value)}
                className="px-2 py-1 bg-slate-50 border border-slate-300 rounded text-slate-800 flex-1 text-xs focus:ring-1 focus:ring-sky-500 focus:outline-none"
                placeholder="Metin yazın..."
              />
            </div>
            
            {/* Quick Color Picker */}
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-700">Renk:</span>
              {['#61dafb', '#38bdf8', '#34d399', '#f43f5e', '#a855f7', '#fbbf24'].map((color) => (
                <button
                  key={color}
                  onClick={() => setTextColor(color)}
                  className={`w-4 h-4 rounded-full border ${textColor === color ? 'ring-2 ring-sky-500 scale-110' : 'border-slate-300'}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <button
              onClick={handleReset}
              className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded"
              title="Varsayılana Sıfırla"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Code Editor Window */}
      <div className="relative rounded-2xl bg-[#1e293b] text-slate-200 font-mono text-xs sm:text-[13px] shadow-xl border border-slate-700/60 overflow-hidden group">
        {/* Editor Top Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#182234] border-b border-slate-700/50">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
            <div className="w-3 h-3 rounded-full bg-[#10b981]" />
          </div>
          <span className="text-[11px] text-slate-400 font-sans font-medium">MerhabaDunya.jsx</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white bg-slate-700/50 hover:bg-slate-700 px-2 py-0.5 rounded transition-colors"
            title="Kodu Kopyala"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Kopyalandı' : 'Kopyala'}</span>
          </button>
        </div>

        {/* Code Body with Exact Syntax Highlighting matching the image */}
        <div className="p-4 sm:p-5 leading-relaxed overflow-x-auto select-text font-mono">
          <div>
            <span className="text-[#f43f5e] font-semibold">import</span>{' '}
            <span className="text-white">React</span>{' '}
            <span className="text-[#f43f5e] font-semibold">from</span>{' '}
            <span className="text-[#34d399]">'react'</span>;
          </div>
          <div className="mt-3">
            <span className="text-[#f43f5e] font-semibold">function</span>{' '}
            <span className="text-[#38bdf8] font-bold">MerhabaDunya</span>() {'{'}
          </div>
          <div className="pl-4">
            <span className="text-[#f43f5e] font-semibold">return</span> (
          </div>
          <div className="pl-8 text-slate-300">
            &lt;<span className="text-[#38bdf8]">div</span>{' '}
            <span className="text-[#fbbf24]">style</span>={'{{'}{' '}
            <span className="text-slate-300">color:</span>{' '}
            <span className="text-[#34d399]">'{textColor}'</span>,
          </div>
          <div className="pl-24 text-slate-300">
            fontSize:{' '}
            <span className="text-[#34d399]">'{fontSize}px'</span> {'}}'}&gt;
          </div>
          <div className="pl-12 text-white font-medium py-0.5">
            {greetingText}
          </div>
          <div className="pl-8 text-slate-300">
            &lt;/<span className="text-[#38bdf8]">div</span>&gt;
          </div>
          <div className="pl-4">
            );
          </div>
          <div>
            {'}'}
          </div>
          <div className="mt-3">
            <span className="text-[#f43f5e] font-semibold">export default</span>{' '}
            <span className="text-[#38bdf8] font-bold">MerhabaDunya</span>;
          </div>
        </div>
      </div>

      {/* Downward Arrow Indicator */}
      <div className="flex justify-center my-3">
        <div className="flex flex-col items-center">
          <svg
            className="w-6 h-8 text-slate-800"
            viewBox="0 0 24 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="2" x2="12" y2="24" />
            <polyline points="5 17 12 24 19 17" />
          </svg>
        </div>
      </div>

      {/* Rendered Live Browser Output Window */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-4 sm:p-5 relative transition-all duration-300 hover:shadow-lg">
        {/* Window Top Mini Bar */}
        <div className="flex items-center space-x-1.5 mb-3 pb-2 border-b border-slate-100">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="text-[10px] text-slate-400 font-medium pl-2">Canlı Çıktı</span>
        </div>

        {/* Rendered Result matching the image */}
        <div 
          onClick={triggerConfetti}
          className="py-4 text-center cursor-pointer select-none group/render"
          title="El sallayan emojiyi kutlamak için tıklayın!"
        >
          <div
            style={{
              color: textColor,
              fontSize: `${fontSize}px`
            }}
            className="font-bold tracking-tight inline-flex items-center justify-center gap-1.5 transition-transform hover:scale-105"
          >
            <span>{greetingText}</span>
          </div>
          <div className="text-[10px] text-slate-400 mt-1 opacity-0 group-hover/render:opacity-100 transition-opacity flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" /> Kutlama efekti için tıkla!
          </div>
        </div>
      </div>
    </div>
  );
};
