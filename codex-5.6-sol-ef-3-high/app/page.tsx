import type { IconType } from "react-icons";
import {
  FaArrowDown,
  FaBolt,
  FaBriefcase,
  FaChartSimple,
  FaCheck,
  FaCode,
  FaGear,
  FaHeart,
  FaPuzzlePiece,
  FaRotate,
  FaTableCellsLarge,
  FaUsers,
} from "react-icons/fa6";
import {
  SiMeta,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

const highlights: Feature[] = [
  {
    title: "BİLEŞEN TABANLI",
    description: "UI’ları küçük, yeniden kullanılabilir bileşenler halinde oluşturur.",
    icon: FaPuzzlePiece,
  },
  {
    title: "YÜKSEK PERFORMANS",
    description: "Sanal DOM ile yalnızca değişen bölümleri güncelleyerek daha hızlı ve verimli çalışır.",
    icon: FaBolt,
  },
  {
    title: "TEK YÖNLÜ VERİ AKIŞI",
    description: "Veri akışı daha öngörülebilir ve hataları tespit etmek daha kolaydır.",
    icon: FaRotate,
  },
  {
    title: "GENİŞ EKOSİSTEM",
    description: "Zengin araçlar, topluluk desteği ve güçlü bir ekosisteme sahiptir.",
    icon: FaChartSimple,
  },
];

const essentials: Feature[] = [
  {
    title: "JSX",
    description: "JavaScript içine HTML benzeri sözdizimi yazarak daha okunabilir kodlar yazmanızı sağlar.",
    icon: FaCode,
  },
  {
    title: "BİLEŞENLER (COMPONENTS)",
    description: "UI’ı bağımsız ve yeniden kullanılabilir parçalara böler, geliştirmeyi kolaylaştırır.",
    icon: FaTableCellsLarge,
  },
  {
    title: "STATE & PROPS",
    description: "State (durum) değişen verileri, Props ise bileşenler arası veri iletişimini yönetir.",
    icon: FaCode,
  },
  {
    title: "LIFECYCLE (YAŞAM DÖNGÜSÜ)",
    description: "Bileşenlerin oluşturulma, güncellenme ve kaldırılma aşamalarını yönetmenizi sağlar.",
    icon: FaGear,
  },
  {
    title: "SANAL DOM",
    description: "Gerçek DOM’u en verimli şekilde güncelleyerek daha iyi performans sunar.",
    icon: FaCheck,
  },
];

const tools: Array<Feature & { color: string }> = [
  {
    title: "React Router",
    description: "Sayfa yönlendirme ve navigasyon yönetimi.",
    icon: SiReactrouter,
    color: "tool-router",
  },
  {
    title: "Redux",
    description: "Global state yönetimi için öngörülebilir bir yapı sağlar.",
    icon: SiRedux,
    color: "tool-redux",
  },
  {
    title: "React Query",
    description: "Sunucu durumunu çekmek, önbelleğe almak ve senkronize etmek için.",
    icon: SiReactquery,
    color: "tool-query",
  },
  {
    title: "Tailwind CSS",
    description: "Hızlı ve modern tasarımlar için CSS çerçevesi.",
    icon: SiTailwindcss,
    color: "tool-tailwind",
  },
  {
    title: "Vite",
    description: "Hızlı geliştirme deneyimi sunan modern build aracı.",
    icon: SiVite,
    color: "tool-vite",
  },
];

function BrowserIllustration() {
  return (
    <div className="browser-art" aria-hidden="true">
      <div className="browser-bar">
        <i />
        <i />
        <i />
      </div>
      <div className="browser-body">
        <div className="browser-sidebar">
          <div className="sidebar-block" />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="browser-main">
          <div className="image-placeholder">
            <i className="sun" />
            <i className="mountain mountain-one" />
            <i className="mountain mountain-two" />
          </div>
          <span className="content-line" />
          <span className="button-line" />
        </div>
      </div>
      <div className="react-badge">
        <SiReact />
      </div>
    </div>
  );
}

function Sparkles() {
  return (
    <div className="sparkles" aria-hidden="true">
      <span className="spark spark-one">+</span>
      <span className="spark spark-two">+</span>
      <span className="spark spark-three">•</span>
      <span className="spark spark-four">+</span>
      <span className="spark spark-five">◦</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="page-shell">
        <header className="hero">
          <Sparkles />
          <div className="hero-mark" aria-hidden="true">
            <SiReact />
          </div>
          <div className="hero-copy">
            <h1>React.js</h1>
            <p className="eyebrow">KULLANICI ARAYÜZLERİ İÇİN<br />JAVASCRIPT KÜTÜPHANESİ</p>
            <p className="intro">
              React, etkileşimli ve yüksek performanslı web uygulamaları geliştirmek için kullanılan,
              deklaratif ve bileşen tabanlı bir JavaScript kütüphanesidir.
            </p>
          </div>
          <BrowserIllustration />
        </header>

        <section className="highlight-grid" aria-label="React avantajları">
          {highlights.map(({ title, description, icon: Icon }) => (
            <article className="highlight" key={title}>
              <div className="round-icon"><Icon /></div>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel essentials-panel">
            <h2 className="section-title">TEMEL ÖZELLİKLER</h2>
            <div className="essential-list">
              {essentials.map(({ title, description, icon: Icon }) => (
                <div className="essential-item" key={title}>
                  <div className="essential-icon"><Icon /></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel component-panel">
            <h2 className="section-title">BASİT BİR REACT BİLEŞENİ</h2>
            <div className="code-window" aria-label="Basit React bileşeni kod örneği">
              <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
              <pre><code>
                <span className="pink">import</span> React <span className="pink">from</span> <span className="green">&apos;react&apos;</span>;
                {"\n\n"}<span className="pink">function</span> <span className="cyan">MerhabaDunya</span>() {"{"}
                {"\n  "}<span className="pink">return</span> (
                {"\n    "}<span className="pink">&lt;div</span> style={"{{ color: '#61dafb',"}
                {"\n                 "}fontSize: <span className="green">&apos;20px&apos;</span> {"}}"}<span className="pink">&gt;</span>
                {"\n      "}Merhaba Dünya! 👋
                {"\n    "}<span className="pink">&lt;/div&gt;</span>
                {"\n  "});
                {"\n"}{"}"}
                {"\n\n"}<span className="pink">export default</span> <span className="yellow">MerhabaDunya</span>;
              </code></pre>
            </div>
            <FaArrowDown className="flow-arrow" aria-hidden="true" />
            <div className="output-window">
              <div className="output-dots" aria-hidden="true"><i /><i /><i /></div>
              <p>Merhaba Dünya! 👋</p>
            </div>
          </article>
        </section>

        <section className="tools-panel panel">
          <h2 className="section-title">POPÜLER ARAÇLAR &amp; KÜTÜPHANELER</h2>
          <div className="tools-grid">
            {tools.map(({ title, description, icon: Icon, color }) => (
              <article className="tool" key={title}>
                <Icon className={color} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="why-react" aria-label="Neden React">
          <div className="why-title"><span><FaHeart /></span><strong>NEDEN REACT?</strong></div>
          <div className="reason"><SiMeta /><p>Facebook (Meta) tarafından geliştirilir ve desteklenir.</p></div>
          <div className="reason"><FaUsers /><p>Büyük ve aktif bir topluluğa sahiptir.</p></div>
          <div className="reason"><FaBriefcase /><p>Küçük projelerden kurumsal uygulamalara kadar ölçeklenebilir.</p></div>
        </section>

        <footer>
          <span>★</span>
          <p>DAHA AZ KOD, DAHA FAZLA ÜRETKENLİK!</p>
          <span>★</span>
        </footer>
      </div>
    </main>
  );
}
