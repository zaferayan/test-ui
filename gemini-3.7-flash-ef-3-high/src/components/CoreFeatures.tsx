import React, { useState } from 'react';
import { Code2, LayoutGrid, Braces, Settings, CheckCircle2, ChevronRight, Info } from 'lucide-react';

export interface CoreFeatureItem {
  id: string;
  title: string;
  description: string;
  iconType: 'code' | 'components' | 'braces' | 'lifecycle' | 'vdom';
  exampleSnippet: string;
  badge: string;
  deepExplanation: string;
}

export const coreFeaturesData: CoreFeatureItem[] = [
  {
    id: 'jsx',
    title: 'JSX',
    description: 'JavaScript içine HTML benzeri sözdizimi yazarak daha okunabilir kodlar yazmanızı sağlar.',
    iconType: 'code',
    badge: 'Sözdizimi',
    deepExplanation: 'JSX (JavaScript XML), JavaScript dosyaları içinde React elementleri tanımlamaya olanak tanıyan bir sözdizimi uzantısıdır. Babel gibi derleyiciler JSX kodunu standart React.createElement() çağrılarına dönüştürür.',
    exampleSnippet: `// JSX Örneği:
const element = (
  <div className="card">
    <h1>Merhaba React!</h1>
    <p>Bugünün tarihi: {new Date().toLocaleDateString()}</p>
  </div>
);`
  },
  {
    id: 'components',
    title: 'BİLEŞENLER (COMPONENTS)',
    description: "UI'ı bağımsız ve yeniden kullanılabilir parçalara böler, geliştirmeyi kolaylaştırır.",
    iconType: 'components',
    badge: 'Yapı Taşı',
    deepExplanation: 'Bileşenler, girdi olarak "props" alan ve ekranda neyin görünmesi gerektiğini tanımlayan React öğeleri döndüren bağımsız JavaScript fonksiyonlarıdır.',
    exampleSnippet: `// Yeniden kullanılabilir Buton Bileşeni:
function Buton({ metin, onClick, varyant = 'primary' }) {
  return (
    <button 
      onClick={onClick} 
      className={\`btn btn-\${varyant}\`}
    >
      {metin}
    </button>
  );
}`
  },
  {
    id: 'state-props',
    title: 'STATE & PROPS',
    description: 'State (durum) değişen verileri, Props ise bileşenler arası veri iletişimini yönetir.',
    iconType: 'braces',
    badge: 'Veri Yönetimi',
    deepExplanation: 'Props (özellikler) salt okunur olup üst bileşenden alt bileşene aktarılır. State ise bileşenin kendi içinde tutulan, zamanla değişebilen ve arayüzün yeniden çizilmesini tetikleyen verilerdir.',
    exampleSnippet: `// State (useState) & Props kullanımı:
function Sayac({ baslangic = 0 }) {
  const [sayi, setSayi] = React.useState(baslangic);

  return (
    <button onClick={() => setSayi(sayi + 1)}>
      Tıklama sayısı: {sayi}
    </button>
  );
}`
  },
  {
    id: 'lifecycle',
    title: 'LIFECYCLE (YAŞAM DÖNGÜSÜ)',
    description: 'Bileşenlerin oluşturulma, güncellenme ve kaldırılma aşamalarını yönetmenizi sağlar.',
    iconType: 'lifecycle',
    badge: 'Etki & Hooklar',
    deepExplanation: 'Bileşen yaşam döngüsü Mount (Oluşma), Update (Güncellenme) ve Unmount (Yok olma) evrelerinden oluşur. Fonksiyonel bileşenlerde useEffect hook\'u tüm bu evreleri yönetir.',
    exampleSnippet: `// Yaşam döngüsü (useEffect):
React.useEffect(() => {
  console.log("Bileşen DOM'a yüklendi (Mount)");

  const timer = setInterval(() => console.log("Tik"), 1000);

  return () => {
    console.log("Bileşen kaldırıldı (Unmount)");
    clearInterval(timer);
  };
}, []);`
  },
  {
    id: 'vdom',
    title: 'SANAL DOM',
    description: "Gerçek DOM'u en verimli şekilde güncelleyerek daha iyi performans sunar.",
    iconType: 'vdom',
    badge: 'Performans',
    deepExplanation: 'React, arayüzün bellekte hafif bir kopyasını (Sanal DOM) tutar. Değişiklik olduğunda eski ve yeni Sanal DOM karşılaştırılır (Diffing) ve yalnızca değişen kısımlar gerçek DOM\'a uygulanır (Reconciliation).',
    exampleSnippet: `// Virtual DOM optimizasyonu:
// Sadece <p> içindeki sayaç metni değiştiğinde
// tüm div yeniden çizilmez, yalnızca o metin düğümü güncellenir!
<div>
  <Header title="Statik Başlık (Yeniden çizilmez)" />
  <p>Değişen Değer: {count}</p>
</div>`
  }
];

export const CoreFeatures: React.FC<{ onSelectFeature?: (feature: CoreFeatureItem) => void }> = ({ onSelectFeature }) => {
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);

  const renderIcon = (type: string) => {
    switch (type) {
      case 'code':
        return <Code2 className="w-5 h-5 text-white" strokeWidth={2.5} />;
      case 'components':
        return <LayoutGrid className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case 'braces':
        return <Braces className="w-5 h-5 text-white" strokeWidth={2.5} />;
      case 'lifecycle':
        return <Settings className="w-5 h-5 text-white" strokeWidth={2.2} />;
      case 'vdom':
        return <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />;
      default:
        return <Code2 className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="bg-[#eef7fc] rounded-2xl p-6 sm:p-7 border border-sky-100/90 shadow-sm flex flex-col justify-between h-full">
      {/* Title */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          TEMEL ÖZELLİKLER
        </h2>
        <span className="text-[11px] font-semibold text-sky-600 bg-sky-100/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          5 Temel Direk
        </span>
      </div>

      {/* 5 Features List */}
      <div className="flex flex-col divide-y divide-sky-200/60">
        {coreFeaturesData.map((feature) => {
          const isSelected = activeFeatureId === feature.id;

          return (
            <div
              key={feature.id}
              onClick={() => {
                setActiveFeatureId(isSelected ? null : feature.id);
                if (onSelectFeature) onSelectFeature(feature);
              }}
              className="py-3.5 first:pt-0 last:pb-0 group cursor-pointer transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                {/* Blue Circular Icon */}
                <div className="w-11 h-11 flex-shrink-0 rounded-full bg-[#0284c7] group-hover:bg-[#0369a1] group-hover:scale-105 flex items-center justify-center shadow-md shadow-sky-600/25 transition-all">
                  {renderIcon(feature.iconType)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 tracking-wide mb-1 group-hover:text-[#0284c7] transition-colors">
                      {feature.title}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-sky-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom helper tip */}
      <div className="mt-4 pt-3 border-t border-sky-200/50 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1.5 text-sky-700 font-medium text-[11px]">
          <Info className="w-3.5 h-3.5" /> Detaylar ve kod örnekleri için özelliklere tıklayın
        </span>
      </div>
    </div>
  );
};
