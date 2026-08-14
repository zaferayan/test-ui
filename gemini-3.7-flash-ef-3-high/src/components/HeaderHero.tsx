import React, { useState } from 'react';
import { ReactLogo, PlusDeco, DiamondDeco } from './Icons';

export const HeaderHero: React.FC = () => {
  const [isLogoSpinning, setIsLogoSpinning] = useState(true);

  return (
    <section className="relative pt-2 pb-6 px-2 sm:px-6">
      {/* Decorative Floating Sparkles / Background Elements */}
      <div className="absolute top-4 left-6 pointer-events-none text-sky-200 animate-pulse-subtle">
        <PlusDeco className="w-4 h-4 text-sky-300 opacity-70" />
      </div>
      <div className="absolute top-12 left-1/3 pointer-events-none text-sky-300">
        <DiamondDeco className="w-3.5 h-3.5 text-sky-400 opacity-60 animate-bounce" />
      </div>
      <div className="absolute top-3 right-8 pointer-events-none text-sky-200">
        <DiamondDeco className="w-3.5 h-3.5 text-sky-300 opacity-70" />
      </div>
      <div className="absolute bottom-4 left-12 pointer-events-none text-sky-200">
        <div className="w-2 h-2 rounded-full bg-sky-200 opacity-80" />
      </div>
      <div className="absolute top-24 right-1/2 pointer-events-none text-sky-300">
        <PlusDeco className="w-3.5 h-3.5 text-sky-300 opacity-70" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Logo + Title + Subtitle + Description */}
        <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Main Giant React Logo with Interactive Spin */}
          <div 
            onClick={() => setIsLogoSpinning(!isLogoSpinning)}
            className="cursor-pointer select-none relative group flex-shrink-0 transition-transform duration-300 hover:scale-105"
            title="Döndürmeyi durdurmak/başlatmak için tıklayın"
          >
            <div className="absolute -inset-2 bg-sky-400/20 rounded-full blur-xl group-hover:bg-sky-400/35 transition-all" />
            <ReactLogo 
              className={`w-28 h-28 sm:w-36 sm:h-36 drop-shadow-[0_4px_12px_rgba(0,216,255,0.35)] ${
                isLogoSpinning ? 'animate-spin-orbit' : ''
              }`}
              size={144}
            />
          </div>

          {/* Texts */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight leading-none mb-3">
              React.js
            </h1>
            
            <h2 className="text-base sm:text-lg font-extrabold text-[#0284c7] tracking-wider uppercase leading-snug mb-4">
              KULLANICI ARAYÜZLERİ İÇİN<br />
              JAVASCRIPT KÜTÜPHANESİ
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              React, etkileşimli ve yüksek performanslı web uygulamaları geliştirmek için kullanılan, deklaratif ve bileşen tabanlı bir JavaScript kütüphanesidir.
            </p>
          </div>
        </div>

        {/* Right Column: Clean Browser Window Mockup Graphic */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] bg-white rounded-2xl shadow-xl border border-sky-100 overflow-visible transition-all duration-300 hover:shadow-2xl group">
            
            {/* Top Browser Bar */}
            <div className="bg-[#1d70b8] px-4 py-2.5 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/90" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/90" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/90" />
              </div>
              <div className="text-[10px] text-white/80 font-medium tracking-wide">
                react.dev
              </div>
              <div className="w-6" />
            </div>

            {/* Browser Content */}
            <div className="p-4 bg-white rounded-b-2xl">
              <div className="grid grid-cols-12 gap-3.5">
                {/* Left Wireframe Sidebar Elements */}
                <div className="col-span-4 flex flex-col justify-between py-1">
                  <div className="space-y-2.5">
                    {/* Top small card skeleton */}
                    <div className="h-12 bg-slate-100 rounded-lg w-full border border-slate-200/70 p-2 flex flex-col justify-center gap-1.5">
                      <div className="h-1.5 bg-slate-300 rounded w-full" />
                      <div className="h-1.5 bg-slate-200 rounded w-2/3" />
                    </div>

                    {/* Horizontal text line placeholders */}
                    <div className="space-y-1.5 pt-1">
                      <div className="h-1.5 bg-slate-200 rounded w-full" />
                      <div className="h-1.5 bg-slate-200 rounded w-5/6" />
                      <div className="h-1.5 bg-slate-200 rounded w-4/5" />
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className="h-1.5 bg-slate-200 rounded w-full" />
                    <div className="h-1.5 bg-slate-200 rounded w-3/4" />
                  </div>
                </div>

                {/* Right Hero Image Card: Mountain Landscape Graphic */}
                <div className="col-span-8 flex flex-col space-y-3">
                  <div className="relative h-28 rounded-xl overflow-hidden bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50 border border-sky-200/80 shadow-inner group-hover:scale-[1.02] transition-transform">
                    {/* Sun */}
                    <div className="absolute top-2.5 right-6 w-5 h-5 rounded-full bg-white/95 shadow-sm" />

                    {/* Mountain Layer 1 (Back) */}
                    <svg
                      className="absolute bottom-0 w-full h-20"
                      viewBox="0 0 200 80"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,80 L55,20 L120,80 Z"
                        fill="#60a5fa"
                      />
                      <path
                        d="M85,80 L150,12 L200,80 Z"
                        fill="#3b82f6"
                      />
                      <path
                        d="M30,80 L100,32 L175,80 Z"
                        fill="#2563eb"
                        fillOpacity="0.9"
                      />
                    </svg>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="flex items-center justify-between pt-0.5">
                    <div className="h-5 bg-[#3b82f6] hover:bg-[#2563eb] transition-colors rounded-md w-20 shadow-sm flex items-center justify-center">
                      <div className="h-1.5 w-10 bg-white/90 rounded-full" />
                    </div>
                    <div className="h-1.5 w-10 bg-slate-200 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Floating React Badge on Bottom Right */}
            <div className="absolute -bottom-6 -right-6 bg-white p-1.5 rounded-full shadow-xl border border-sky-100 hover:scale-110 transition-transform">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#38bdf8] to-[#00d8ff] flex items-center justify-center shadow-md">
                <ReactLogo className="w-9 h-9 text-white animate-spin-orbit" size={36} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
