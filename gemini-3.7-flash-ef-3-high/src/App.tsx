import { useState } from 'react';
import { HeaderHero } from './components/HeaderHero';
import { HighlightFeatures } from './components/HighlightFeatures';
import { CoreFeatures, CoreFeatureItem } from './components/CoreFeatures';
import { InteractiveCodePlayground } from './components/InteractiveCodePlayground';
import { EcosystemSection, EcosystemTool } from './components/EcosystemSection';
import { WhyReactBanner } from './components/WhyReactBanner';
import { FooterSlogan } from './components/FooterSlogan';
import { ToolDetailModal } from './components/ToolDetailModal';
import { FeatureExplorationModal } from './components/FeatureExplorationModal';
import { NavigationControls } from './components/NavigationControls';

export function App() {
  const [selectedTool, setSelectedTool] = useState<EcosystemTool | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<CoreFeatureItem | null>(null);
  const [viewMode, setViewMode] = useState<'poster' | 'app'>('poster');

  return (
    <div className="min-h-screen bg-slate-100/80 text-slate-800 pb-12">
      {/* Top Navigation & Controls Toolbar */}
      <NavigationControls
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-3 sm:px-6">
        <div className={`poster-container bg-white rounded-3xl shadow-xl shadow-sky-900/5 border border-sky-100/80 p-5 sm:p-9 md:p-11 transition-all duration-300 relative overflow-hidden ${
          viewMode === 'app' ? 'max-w-6xl' : 'max-w-4xl'
        }`}>
          
          {/* Subtle decorative background ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-100/50 via-cyan-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-sky-100/40 via-blue-50/20 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* 1. Header & Hero Section */}
          <HeaderHero />

          {/* 2. Highlight Features (4 Columns) */}
          <HighlightFeatures />

          {/* 3. Middle Section: Core Features (Left) & Simple React Component (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6 items-stretch">
            {/* Left Card: TEMEL ÖZELLİKLER */}
            <CoreFeatures onSelectFeature={(feat) => setSelectedFeature(feat)} />

            {/* Right Card: BASİT BİR REACT BİLEŞENİ */}
            <InteractiveCodePlayground />
          </div>

          {/* 4. POPÜLER ARAÇLAR & KÜTÜPHANELER */}
          <EcosystemSection onSelectTool={(tool) => setSelectedTool(tool)} />

          {/* 5. NEDEN REACT? Banner */}
          <WhyReactBanner />

          {/* 6. Footer Slogan */}
          <FooterSlogan />

        </div>
      </main>

      {/* Modals for Interactive Exploration */}
      <ToolDetailModal
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
      />

      <FeatureExplorationModal
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </div>
  );
}

export default App;
