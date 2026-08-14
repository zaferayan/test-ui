import React from 'react';
import { Puzzle, Zap, RefreshCw, TrendingUp } from 'lucide-react';

interface HighlightItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
  badge: string;
}

const highlights: HighlightItem[] = [
  {
    id: 'component-based',
    icon: <Puzzle className="w-6 h-6 text-white" strokeWidth={2.2} />,
    title: 'BİLEŞEN TABANLI',
    description: "UI'ları küçük, yeniden kullanılabilir bileşenler halinde oluşturur.",
    detail: "Büyük uygulamalar modüler, test edilebilir ve izole Lego parçaları gibi inşa edilir.",
    badge: 'Modülerlik'
  },
  {
    id: 'high-performance',
    icon: <Zap className="w-6 h-6 text-white" strokeWidth={2.2} />,
    title: 'YÜKSEK PERFORMANS',
    description: 'Sanal DOM ile yalnızca değişen bölümleri güncelleyerek daha hızlı ve verimli çalışır.',
    detail: 'Diffing algoritması sayesinde gerçek tarayıcı DOM maliyetli yeniden çizimlerden kurtulur.',
    badge: 'Hız & Optimizasyon'
  },
  {
    id: 'unidirectional-data-flow',
    icon: <RefreshCw className="w-6 h-6 text-white" strokeWidth={2.2} />,
    title: 'TEK YÖNLÜ VERİ AKIŞI',
    description: 'Veri akışı daha öngörülebilir ve hataları tespit etmek daha kolaydır.',
    detail: 'Parent bileşenlerden child bileşenlere props akışı hata ayıklamayı basitleştirir.',
    badge: 'Öngörülebilirlik'
  },
  {
    id: 'rich-ecosystem',
    icon: <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.2} />,
    title: 'GENİŞ EKOSİSTEM',
    description: 'Zengin araçlar, topluluk desteği ve güçlü bir ekosisteme sahiptir.',
    detail: 'Milyonlarca geliştirici, kütüphane, UI kit ve kurumsal destek arkasındadır.',
    badge: 'Dev Topluluk'
  }
];

export const HighlightFeatures: React.FC<{ onSelectFeature?: (item: HighlightItem) => void }> = ({ onSelectFeature }) => {
  return (
    <section className="my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {highlights.map((item, index) => (
          <div
            key={item.id}
            onClick={() => onSelectFeature && onSelectFeature(item)}
            className="flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 hover:bg-sky-50/70 hover:shadow-sm cursor-pointer group relative"
          >
            {/* Divider line between columns on large screens */}
            {index < highlights.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-[1px] bg-slate-200/80" />
            )}

            {/* Circular Icon with Soft Glow Background */}
            <div className="relative mb-3.5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-sky-400 to-[#0284c7] flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-sky-500/30 transition-all duration-300">
                {item.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-sm font-bold text-slate-800 tracking-wide uppercase mb-2 group-hover:text-[#0284c7] transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-[220px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
