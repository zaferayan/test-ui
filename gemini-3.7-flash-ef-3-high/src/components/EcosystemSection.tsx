import React from 'react';
import { ReactRouterLogo, ReduxLogo, ReactQueryLogo, TailwindLogo, ViteLogo } from './Icons';

export interface EcosystemTool {
  id: string;
  name: string;
  logo: React.ReactNode;
  description: string;
  category: string;
  npmCommand: string;
  officialUrl: string;
  features: string[];
}

export const ecosystemToolsData: EcosystemTool[] = [
  {
    id: 'react-router',
    name: 'React Router',
    logo: <ReactRouterLogo size={44} />,
    description: 'Sayfa yönlendirme ve navigasyon yönetimi.',
    category: 'Routing',
    npmCommand: 'npm install react-router-dom',
    officialUrl: 'https://reactrouter.com',
    features: [
      'Dinamik istemci tarafı yönlendirme (Client-side routing)',
      'İç içe geçmiş rotalar (Nested Routes)',
      'Veri yükleyicileri (Loaders & Actions)',
      'Gelişmiş URL parametreleri ve arama filtreleri'
    ]
  },
  {
    id: 'redux',
    name: 'Redux',
    logo: <ReduxLogo size={44} />,
    description: 'Global state yönetimi için öngörülebilir bir yapı sağlar.',
    category: 'State Management',
    npmCommand: 'npm install @reduxjs/toolkit react-redux',
    officialUrl: 'https://redux-toolkit.js.org',
    features: [
      'Merkezi tekil doğruluk kaynağı (Single source of truth)',
      'Redux Toolkit (RTK) ile basitleştirilmiş modern yazım',
      'Zaman yolculuğu hata ayıklama (Time-travel debugging)',
      'Redux Thunk & RTK Query ile asenkron veri yönetimi'
    ]
  },
  {
    id: 'react-query',
    name: 'React Query',
    logo: <ReactQueryLogo size={44} />,
    description: 'Sunucu durumunu çekmek, önbelleğe almak ve senkronize etmek için.',
    category: 'Data Fetching',
    npmCommand: 'npm install @tanstack/react-query',
    officialUrl: 'https://tanstack.com/query',
    features: [
      'Otomatik önbellekleme ve arka planda veri yenileme',
      'Sayfalama (Pagination) ve sonsuz kaydırma (Infinite Scroll)',
      'Ağ yeniden bağlandığında otomatik tekrar deneme',
      'Sunucu durumunu (Server State) sıfır boilerplate ile yönetme'
    ]
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    logo: <TailwindLogo size={44} />,
    description: 'Hızlı ve modern tasarımlar için CSS çerçevesi.',
    category: 'Styling',
    npmCommand: 'npm install -D tailwindcss postcss autoprefixer',
    officialUrl: 'https://tailwindcss.com',
    features: [
      'Utility-first atomik CSS sınıfları',
      'Dahili responsive tasarım kırılma noktaları',
      'Koyu mod (Dark mode) desteği',
      'Kullanılmayan stilleri temizleyen ultra hafif çıktı'
    ]
  },
  {
    id: 'vite',
    name: 'Vite',
    logo: <ViteLogo size={44} />,
    description: 'Hızlı geliştirme deneyimi sunan modern build aracı.',
    category: 'Build Tool',
    npmCommand: 'npm create vite@latest my-react-app -- --template react',
    officialUrl: 'https://vitejs.dev',
    features: [
      'Anında sunucu başlatma (Native ES Modules)',
      'Işık hızında Sıcak Modül Değişimi (HMR)',
      'Optimize edilmiş Rollup üretim derlemeleri',
      'TypeScript, JSX, CSS modülleri için hazır destek'
    ]
  }
];

export const EcosystemSection: React.FC<{ onSelectTool?: (tool: EcosystemTool) => void }> = ({ onSelectTool }) => {
  return (
    <div className="bg-[#eef7fc] rounded-2xl p-6 sm:p-7 border border-sky-100/90 shadow-sm my-6">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight text-center mb-6">
        POPÜLER ARAÇLAR & KÜTÜPHANELER
      </h2>

      {/* 5 Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
        {ecosystemToolsData.map((tool, index) => (
          <div
            key={tool.id}
            onClick={() => onSelectTool && onSelectTool(tool)}
            className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-white/90 hover:shadow-md transition-all duration-300 cursor-pointer group relative"
          >
            {/* Divider lines between columns */}
            {index < ecosystemToolsData.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-sky-200/60" />
            )}

            {/* Logo */}
            <div className="mb-3.5 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {tool.logo}
            </div>

            {/* Name */}
            <h3 className="text-sm font-bold text-slate-900 tracking-wide mb-1.5 group-hover:text-[#0284c7] transition-colors">
              {tool.name}
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-xs leading-relaxed max-w-[180px]">
              {tool.description}
            </p>

            <span className="mt-2 text-[10px] font-semibold text-sky-600 bg-sky-100/70 px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              Detayları Gör
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
