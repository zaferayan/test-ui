import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Braces,
  CheckCircle2,
  Code2,
  Component,
  Gauge,
  Heart,
  Puzzle,
  RefreshCw,
  Settings,
  Users,
  Zap,
} from 'lucide-react'
import './styles.css'

const ReactMark = ({ small = false }) => (
  <svg className={small ? 'react-mark small' : 'react-mark'} viewBox="0 0 220 200" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeWidth="9">
      <ellipse cx="110" cy="100" rx="100" ry="40" />
      <ellipse cx="110" cy="100" rx="100" ry="40" transform="rotate(60 110 100)" />
      <ellipse cx="110" cy="100" rx="100" ry="40" transform="rotate(120 110 100)" />
    </g>
    <circle cx="110" cy="100" r="18" fill="currentColor" />
  </svg>
)

const BrowserArt = () => (
  <div className="browser-art" aria-hidden="true">
    <div className="browser-top"><i /><i /><i /></div>
    <div className="browser-body">
      <div className="browser-side">
        <b />
        <span /><span /><span /><span /><span />
      </div>
      <div className="browser-main">
        <div className="browser-picture">
          <div className="sun" />
          <div className="mountain m1" />
          <div className="mountain m2" />
          <em />
        </div>
        <span className="content-line" />
        <button tabIndex="-1" />
      </div>
    </div>
    <div className="browser-badge"><ReactMark small /></div>
  </div>
)

const benefits = [
  { icon: Puzzle, title: 'BİLEŞEN TABANLI', text: 'UI’ları küçük, yeniden kullanılabilir bileşenler halinde oluşturur.' },
  { icon: Zap, title: 'YÜKSEK PERFORMANS', text: 'Sanal DOM ile yalnızca değişen bölümleri güncelleyerek daha hızlı ve verimli çalışır.' },
  { icon: RefreshCw, title: 'TEK YÖNLÜ VERİ AKIŞI', text: 'Veri akışı daha öngörülebilir ve hataları tespit etmek daha kolaydır.' },
  { icon: BarChart3, title: 'GENİŞ EKOSİSTEM', text: 'Zengin araçlar, topluluk desteği ve güçlü bir ekosisteme sahiptir.' },
]

const features = [
  { icon: Code2, title: 'JSX', text: 'JavaScript içine HTML benzeri sözdizimi yazarak daha okunabilir kodlar yazmanızı sağlar.' },
  { icon: Boxes, title: 'BİLEŞENLER (COMPONENTS)', text: 'UI’ı bağımsız ve yeniden kullanılabilir parçalara böler, geliştirmeyi kolaylaştırır.' },
  { icon: Braces, title: 'STATE & PROPS', text: 'State (durum) değişen verileri, Props ise bileşenler arası veri iletişimini yönetir.' },
  { icon: Settings, title: 'LIFECYCLE (YAŞAM DÖNGÜSÜ)', text: 'Bileşenlerin oluşturulma, güncellenme ve kaldırılma aşamalarını yönetmenizi sağlar.' },
  { icon: CheckCircle2, title: 'SANAL DOM', text: 'Gerçek DOM’u en verimli şekilde güncelleyerek daha iyi performans sunar.' },
]

const ToolIcon = ({ type }) => {
  if (type === 'router') return <div className="router-logo"><i /><i /><i /><i /></div>
  if (type === 'redux') return <div className="redux-logo">⌘</div>
  if (type === 'query') return <div className="query-logo">✿</div>
  if (type === 'tailwind') return <div className="tailwind-logo">≈</div>
  return <div className="vite-logo">ϟ</div>
}

const tools = [
  { type: 'router', title: 'React Router', text: 'Sayfa yönlendirme ve navigasyon yönetimi.' },
  { type: 'redux', title: 'Redux', text: 'Global state yönetimi için öngörülebilir bir yapı sağlar.' },
  { type: 'query', title: 'React Query', text: 'Sunucu durumunu çekmek, önbelleğe almak ve senkronize etmek için.' },
  { type: 'tailwind', title: 'Tailwind CSS', text: 'Hızlı ve modern tasarımlar için CSS çerçevesi.' },
  { type: 'vite', title: 'Vite', text: 'Hızlı geliştirme deneyimi sunan modern build aracı.' },
]

function App() {
  return (
    <main className="page-shell">
      <div className="decor d1">+</div><div className="decor d2">+</div><div className="decor d3">·</div>
      <section className="hero">
        <div className="hero-logo"><ReactMark /></div>
        <div className="hero-copy">
          <h1>React.js</h1>
          <h2>KULLANICI ARAYÜZLERİ İÇİN<br />JAVASCRIPT KÜTÜPHANESİ</h2>
          <p>React, etkileşimli ve yüksek performanslı web uygulamaları geliştirmek için kullanılan, deklaratif ve bileşen tabanlı bir JavaScript kütüphanesidir.</p>
        </div>
        <BrowserArt />
      </section>

      <section className="benefits" aria-label="React avantajları">
        {benefits.map(({ icon: Icon, title, text }) => (
          <article className="benefit" key={title}>
            <div className="icon-bubble"><Icon /></div>
            <h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </section>

      <section className="detail-grid">
        <article className="panel features-panel">
          <h2>TEMEL ÖZELLİKLER</h2>
          <div className="feature-list">
            {features.map(({ icon: Icon, title, text }) => (
              <div className="feature" key={title}>
                <div className="feature-icon"><Icon /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel code-panel">
          <h2>BASİT BİR REACT BİLEŞENİ</h2>
          <div className="code-window">
            <div className="window-dots"><i /><i /><i /></div>
            <pre><code><span className="pink">import</span> React <span className="pink">from</span> <span className="green">'react'</span>;
{`\n\n`}<span className="pink">function</span> <span className="cyan">MerhabaDunya</span>() {'{'}
{`\n  `}<span className="pink">return</span> (
{`\n    `}&lt;<span className="pink">div</span> style={'{{'} color: <span className="green">'#61dafb'</span>,
{`\n                 `}fontSize: <span className="green">'20px'</span> {'}}'}&gt;
{`\n      `}Merhaba Dünya! 👋
{`\n    `}&lt;/<span className="pink">div</span>&gt;
{`\n  `});
{`\n`} {'}'}
{`\n\n`}<span className="pink">export default</span> <span className="yellow">MerhabaDunya</span>;</code></pre>
          </div>
          <div className="down-arrow">↓</div>
          <div className="output-window"><div><i /><i /><i /></div><strong>Merhaba Dünya! 👋</strong></div>
        </article>
      </section>

      <section className="tools-panel">
        <h2>POPÜLER ARAÇLAR &amp; KÜTÜPHANELER</h2>
        <div className="tool-grid">
          {tools.map(tool => (
            <article className="tool" key={tool.title}>
              <ToolIcon type={tool.type} />
              <h3>{tool.title}</h3><p>{tool.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why-react">
        <div className="why-title"><span><Heart fill="currentColor" /></span><strong>NEDEN REACT?</strong></div>
        <div><Component /><p>Facebook (Meta) tarafından geliştirilir ve desteklenir.</p></div>
        <div><Users /><p>Büyük ve aktif bir topluluğa sahiptir.</p></div>
        <div><BriefcaseBusiness /><p>Küçük projelerden kurumsal uygulamalara kadar ölçeklenebilir.</p></div>
      </section>
      <footer>★ &nbsp;&nbsp; DAHA AZ KOD, DAHA FAZLA ÜRETKENLİK! &nbsp;&nbsp; ★</footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
