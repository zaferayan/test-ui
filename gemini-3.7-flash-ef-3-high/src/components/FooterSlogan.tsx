import React from 'react';
import { StarDeco } from './Icons';

export const FooterSlogan: React.FC = () => {
  return (
    <footer className="mt-8 mb-4 text-center">
      <div className="inline-flex items-center justify-center gap-3 text-sky-600 font-extrabold text-sm sm:text-base tracking-widest uppercase py-2 px-6 rounded-full hover:bg-sky-50 transition-colors">
        <StarDeco className="w-4 h-4 text-sky-500 animate-spin-slow" />
        <span className="bg-gradient-to-r from-sky-600 via-[#0284c7] to-cyan-500 bg-clip-text text-transparent">
          DAHA AZ KOD, DAHA FAZLA ÜRETKENLİK!
        </span>
        <StarDeco className="w-4 h-4 text-sky-500 animate-spin-slow" />
      </div>
    </footer>
  );
};
