import React from 'react';
import { Heart, Users2, Briefcase } from 'lucide-react';
import { MetaLogo } from './Icons';

export const WhyReactBanner: React.FC = () => {
  return (
    <div className="bg-[#e0f2fe] rounded-2xl p-3 sm:p-4 border border-sky-200/80 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
      {/* Left Pill Button / Badge */}
      <div className="flex-shrink-0 flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md shadow-sky-600/30 transition-all cursor-default">
        <Heart className="w-4 h-4 fill-white text-white animate-pulse" />
        <span>NEDEN REACT?</span>
      </div>

      {/* 3 Pillars / Key Values */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full text-xs text-slate-700 font-medium">
        {/* Item 1: Meta */}
        <div className="flex items-center gap-2.5 bg-white/60 hover:bg-white/90 p-2.5 rounded-xl transition-colors">
          <div className="w-7 h-7 flex-shrink-0 rounded-lg bg-sky-100 flex items-center justify-center text-[#0284c7]">
            <MetaLogo className="w-5 h-5 text-[#0284c7]" size={20} />
          </div>
          <span className="leading-snug">
            Facebook (Meta) tarafından geliştirilir ve desteklenir.
          </span>
        </div>

        {/* Item 2: Community */}
        <div className="flex items-center gap-2.5 bg-white/60 hover:bg-white/90 p-2.5 rounded-xl transition-colors">
          <div className="w-7 h-7 flex-shrink-0 rounded-lg bg-sky-100 flex items-center justify-center text-[#0284c7]">
            <Users2 className="w-4 h-4 text-[#0284c7]" />
          </div>
          <span className="leading-snug">
            Büyük ve aktif bir topluluğa sahiptir.
          </span>
        </div>

        {/* Item 3: Scalability */}
        <div className="flex items-center gap-2.5 bg-white/60 hover:bg-white/90 p-2.5 rounded-xl transition-colors">
          <div className="w-7 h-7 flex-shrink-0 rounded-lg bg-sky-100 flex items-center justify-center text-[#0284c7]">
            <Briefcase className="w-4 h-4 text-[#0284c7]" />
          </div>
          <span className="leading-snug">
            Küçük projelerden kurumsal uygulamalara kadar ölçeklenebilir.
          </span>
        </div>
      </div>
    </div>
  );
};
