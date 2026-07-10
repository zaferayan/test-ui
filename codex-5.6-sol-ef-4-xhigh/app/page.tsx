const advantages = [
  {
    icon: "puzzle",
    title: "BİLEŞEN TABANLI",
    text: "UI’ları küçük, yeniden kullanılabilir bileşenler halinde oluşturur.",
  },
  {
    icon: "bolt",
    title: "YÜKSEK PERFORMANS",
    text: "Sanal DOM ile yalnızca değişen bölümleri güncelleyerek daha hızlı ve verimli çalışır.",
  },
  {
    icon: "sync",
    title: "TEK YÖNLÜ VERİ AKIŞI",
    text: "Veri akışı daha öngörülebilir ve hataları tespit etmek daha da kolaydır.",
  },
  {
    icon: "chart",
    title: "GENİŞ EKOSİSTEM",
    text: "Zengin araçlar, topluluk desteği ve güçlü bir ekosisteme sahiptir.",
  },
] as const;

const essentials = [
  {
    icon: "</>",
    title: "JSX",
    text: "JavaScript içine HTML benzeri sözdizimi yazarak daha okunabilir kodlar yazmanızı sağlar.",
  },
  {
    icon: "grid",
    title: "BİLEŞENLER (COMPONENTS)",
    text: "UI’ı bağımsız ve yeniden kullanılabilir parçalara böler, geliştirmeyi kolaylaştırır.",
  },
  {
    icon: "{ }",
    title: "STATE & PROPS",
    text: "State (durum) değişen verileri, Props ise bileşenler arası veri iletişimini yönetir.",
  },
  {
    icon: "gear",
    title: "LIFECYCLE (YAŞAM DÖNGÜSÜ)",
    text: "Bileşenlerin oluşturulma, güncellenme ve kaldırılma aşamalarını yönetmenizi sağlar.",
  },
  {
    icon: "check",
    title: "SANAL DOM",
    text: "Gerçek DOM’u en verimli şekilde güncelleyerek daha iyi performans sunar.",
  },
] as const;

const tools = [
  {
    logo: "router",
    title: "React Router",
    text: "Sayfa yönlendirme ve navigasyon yönetimi.",
  },
  {
    logo: "redux",
    title: "Redux",
    text: "Global state yönetimi için öngörülebilir bir yapı sağlar.",
  },
  {
    logo: "query",
    title: "React Query",
    text: "Sunucu durumunu çekmek, önbelleğe almak ve senkronize etmek için.",
  },
  {
    logo: "tailwind",
    title: "Tailwind CSS",
    text: "Hızlı ve modern tasarımlar için CSS çerçevesi.",
  },
  {
    logo: "vite",
    title: "Vite",
    text: "Hızlı geliştirme deneyimi sunan modern build aracı.",
  },
] as const;

function ReactMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`react-mark${compact ? " compact" : ""}`} aria-label="React logosu">
      <span className="orbit orbit-a" />
      <span className="orbit orbit-b" />
      <span className="orbit orbit-c" />
      <span className="nucleus" />
    </div>
  );
}

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
          <b />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="browser-content">
          <div className="landscape">
            <span className="sun" />
            <span className="mountain mountain-left" />
            <span className="mountain mountain-right" />
          </div>
          <span className="content-line" />
          <span className="content-button" />
        </div>
      </div>
      <div className="browser-react-badge">
        <ReactMark compact />
      </div>
    </div>
  );
}

function AdvantageIcon({ type }: { type: (typeof advantages)[number]["icon"] }) {
  if (type === "puzzle") {
    return <span className="puzzle-icon">✚</span>;
  }
  if (type === "bolt") {
    return <span className="bolt-icon">ϟ</span>;
  }
  if (type === "sync") {
    return <span className="sync-icon">⟳</span>;
  }
  return (
    <span className="chart-icon">
      <i />
      <i />
      <i />
      <b>↗</b>
    </span>
  );
}

function EssentialIcon({ type }: { type: (typeof essentials)[number]["icon"] }) {
  if (type === "grid") {
    return (
      <span className="small-grid">
        <i />
        <i />
        <i />
        <i />
      </span>
    );
  }
  if (type === "gear") return <span className="gear-icon">⚙</span>;
  if (type === "check") return <span className="check-icon">✓</span>;
  return <span className="symbol-icon">{type}</span>;
}

function ToolLogo({ type }: { type: (typeof tools)[number]["logo"] }) {
  if (type === "router") {
    return (
      <span className="router-logo">
        <i className="dot dot-one" />
        <i className="dot dot-two" />
        <i className="dot dot-three" />
        <i className="dot dot-four" />
        <b />
        <em />
      </span>
    );
  }
  if (type === "redux") return <span className="redux-logo">♽</span>;
  if (type === "query") {
    return (
      <span className="query-logo">
        {Array.from({ length: 7 }).map((_, index) => (
          <i key={index} style={{ transform: `rotate(${index * 51.4}deg)` }} />
        ))}
        <b />
      </span>
    );
  }
  if (type === "tailwind") return <span className="tailwind-logo">≈</span>;
  return <span className="vite-logo">V</span>;
}

export default function Home() {
  return (
    <main className="infographic-shell">
      <section className="hero" aria-labelledby="page-title">
        <div className="hero-logo">
          <ReactMark />
        </div>
        <div className="hero-copy">
          <h1 id="page-title">React.js</h1>
          <h2>KULLANICI ARAYÜZLERİ İÇİN<br />JAVASCRIPT KÜTÜPHANESİ</h2>
          <p>
            React, etkileşimli ve yüksek performanslı web uygulamaları geliştirmek için kullanılan,
            deklaratif ve bileşen tabanlı bir JavaScript kütüphanesidir.
          </p>
        </div>
        <BrowserIllustration />
        <div className="spark spark-one">+</div>
        <div className="spark spark-two">+</div>
        <div className="spark spark-three">✣</div>
      </section>

      <section className="advantages" aria-label="React avantajları">
        {advantages.map((item) => (
          <article className="advantage" key={item.title}>
            <div className="advantage-icon">
              <AdvantageIcon type={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="detail-grid">
        <article className="panel essentials-panel">
          <h2>TEMEL ÖZELLİKLER</h2>
          <div className="essential-list">
            {essentials.map((item) => (
              <div className="essential-row" key={item.title}>
                <div className="essential-icon">
                  <EssentialIcon type={item.icon} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel code-panel">
          <h2>BASİT BİR REACT BİLEŞENİ</h2>
          <div className="code-window">
            <div className="window-dots"><i /><i /><i /></div>
            <pre aria-label="React bileşeni kod örneği"><code><span className="pink">import</span> React <span className="pink">from</span> <span className="green">&apos;react&apos;</span>;

<span className="pink">function</span> <span className="cyan">MerhabaDunya</span>() &#123;
  <span className="pink">return</span> (
    &lt;<span className="violet">div</span> style=&#123;&#123; color: <span className="green">&apos;#61dafb&apos;</span>,
                 fontSize: <span className="green">&apos;20px&apos;</span> &#125;&#125;&gt;
      Merhaba Dünya! 👋
    &lt;/<span className="violet">div</span>&gt;
  );
&#125;

<span className="pink">export default</span> <span className="yellow">MerhabaDunya</span>;</code></pre>
          </div>
          <div className="output-arrow">↓</div>
          <div className="result-window">
            <div className="result-dots"><i /><i /><i /></div>
            <p>Merhaba Dünya! 👋</p>
          </div>
        </article>
      </section>

      <section className="tools-panel" aria-labelledby="tools-heading">
        <h2 id="tools-heading">POPÜLER ARAÇLAR &amp; KÜTÜPHANELER</h2>
        <div className="tool-list">
          {tools.map((tool) => (
            <article className="tool" key={tool.title}>
              <ToolLogo type={tool.logo} />
              <h3>{tool.title}</h3>
              <p>{tool.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-strip" aria-label="Neden React">
        <div className="trust-title">
          <span>♥</span>
          <strong>NEDEN REACT?</strong>
        </div>
        <div className="trust-item meta-item"><b>∞</b><p>Facebook (Meta) tarafından geliştirilir ve desteklenir.</p></div>
        <div className="trust-item"><b>♟</b><p>Büyük ve aktif bir topluluğa sahiptir.</p></div>
        <div className="trust-item"><b>▣</b><p>Küçük projelerden kurumsal uygulamalara kadar ölçeklenebilir.</p></div>
      </section>

      <footer>★ <span>DAHA AZ KOD, DAHA FAZLA ÜRETKENLİK!</span> ★</footer>
    </main>
  );
}
