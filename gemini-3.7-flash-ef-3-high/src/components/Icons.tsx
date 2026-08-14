import React from 'react';

// React Atom Logo with precise orbital geometry
export const ReactLogo: React.FC<{ className?: string; size?: number; animated?: boolean }> = ({ 
  className = "w-24 h-24 text-sky-400", 
  size = 96,
  animated = false 
}) => (
  <svg 
    viewBox="-11.5 -10.23174 23 20.46348" 
    width={size} 
    height={size} 
    className={`${className} ${animated ? 'animate-spin-orbit' : ''}`}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
    <g stroke="#00d8ff" strokeWidth="1.1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

// React Router Logo
export const ReactRouterLogo: React.FC<{ className?: string; size?: number }> = ({ className = "w-10 h-10", size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="24" cy="24" r="22" fill="#F43F5E" fillOpacity="0.08" />
    <path d="M12 28L20 20M20 20L28 28M20 20V36M36 16L28 24" stroke="#E11D48" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="28" r="4.5" fill="#0F172A" />
    <circle cx="20" cy="20" r="4.5" fill="#E11D48" />
    <circle cx="28" cy="28" r="4.5" fill="#E11D48" />
    <circle cx="36" cy="16" r="4.5" fill="#0F172A" />
    <circle cx="20" cy="36" r="4" fill="#0F172A" />
  </svg>
);

// Redux Logo
export const ReduxLogo: React.FC<{ className?: string; size?: number }> = ({ className = "w-10 h-10", size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g transform="translate(25, 25) scale(0.95)">
      <path
        d="M 0 -18 C 10 -18 18 -10 18 0 C 18 10 10 18 0 18 C -10 18 -18 10 -18 0 C -18 -10 -10 -18 0 -18"
        stroke="#764ABC"
        strokeWidth="4"
        fill="none"
        strokeDasharray="40 10"
      />
      <circle cx="-12" cy="-6" r="4" fill="#764ABC" />
      <circle cx="12" cy="6" r="4" fill="#764ABC" />
      <circle cx="0" cy="0" r="5" fill="#764ABC" />
      <path
        d="M -12 -6 Q 0 -22 12 -6 Q 24 10 0 16 Q -24 10 -12 -6 Z"
        stroke="#764ABC"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

// React Query Logo (TanStack)
export const ReactQueryLogo: React.FC<{ className?: string; size?: number }> = ({ className = "w-10 h-10", size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g transform="translate(32, 32)">
      {/* 8 Flower Petals in Red, Coral, Orange */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <circle
          key={i}
          cx={Math.cos((angle * Math.PI) / 180) * 14}
          cy={Math.sin((angle * Math.PI) / 180) * 14}
          r="9.5"
          fill={i % 2 === 0 ? "#FF4154" : "#FF6B00"}
          stroke="#0F172A"
          strokeWidth="2.2"
        />
      ))}
      <circle cx="0" cy="0" r="11" fill="#FFD200" stroke="#0F172A" strokeWidth="2.5" />
      <circle cx="0" cy="0" r="5" fill="#FF4154" />
    </g>
  </svg>
);

// Tailwind CSS Logo
export const TailwindLogo: React.FC<{ className?: string; size?: number }> = ({ className = "w-10 h-10", size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M12 20C13.5 14 18 11 25.5 11C34.5 11 36 17 40.5 18.5C43.5 19.5 46.5 18 48 15.5C46.5 21.5 42 24.5 34.5 24.5C25.5 24.5 24 18.5 19.5 17C16.5 16 13.5 17.5 12 20ZM0 33.5C1.5 27.5 6 24.5 13.5 24.5C22.5 24.5 24 30.5 28.5 32C31.5 33 34.5 31.5 36 29C34.5 35 30 38 22.5 38C13.5 38 12 32 7.5 30.5C4.5 29.5 1.5 31 0 33.5Z"
      fill="#06B6D4"
      transform="scale(0.85) translate(3, 4)"
    />
  </svg>
);

// Vite Logo
export const ViteLogo: React.FC<{ className?: string; size?: number }> = ({ className = "w-10 h-10", size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="viteGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#41D1FF" />
        <stop offset="100%" stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient id="viteGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFEA83" />
        <stop offset="100%" stopColor="#FFDD35" />
      </linearGradient>
    </defs>
    <path
      d="M29.5 5.5L16.8 28.8C16.4 29.5 15.4 29.5 15 28.8L2.5 5.5C2.1 4.7 2.7 3.8 3.6 3.9L16 5.5L28.4 3.9C29.3 3.8 29.9 4.7 29.5 5.5Z"
      fill="url(#viteGrad1)"
    />
    <path
      d="M21.5 4.5L13.8 19.5L18.2 19.5L10.5 27.5L18.5 14.5L14.2 14.5L21.5 4.5Z"
      fill="url(#viteGrad2)"
      stroke="#FF9E00"
      strokeWidth="0.5"
    />
  </svg>
);

// Meta / Facebook Infinity Logo
export const MetaLogo: React.FC<{ className?: string; size?: number }> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.9 3.5C14.7 3.5 13.1 4.8 12 6.2C10.9 4.8 9.3 3.5 7.1 3.5C3.3 3.5 0.5 6.6 0.5 10.8C0.5 15.6 4.3 19.8 8.6 19.8C10.7 19.8 12.4 18.7 13.5 17.5C14.7 18.7 16.3 19.8 18.4 19.8C22.7 19.8 26.5 15.6 26.5 10.8C26.5 6.6 23.7 3.5 19.9 3.5H16.9ZM7.1 16.8C4.8 16.8 2.8 14.3 2.8 10.8C2.8 7.9 4.6 5.8 7.1 5.8C9.4 5.8 11.2 7.8 12 9.8C11.1 14.5 8.9 16.8 7.1 16.8ZM16.9 16.8C15.1 16.8 12.9 14.5 12 9.8C12.8 7.8 14.6 5.8 16.9 5.8C19.4 5.8 21.2 7.9 21.2 10.8C21.2 14.3 19.2 16.8 16.9 16.8Z" transform="scale(0.85) translate(0, 1)"/>
  </svg>
);

// Sparkle / Plus / Diamond decorative marks
export const PlusDeco: React.FC<{ className?: string }> = ({ className = "text-sky-300 w-4 h-4" }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path d="M7 1h2v5h5v2H9v5H7V8H2V6h5V1z" />
  </svg>
);

export const DiamondDeco: React.FC<{ className?: string }> = ({ className = "text-sky-300 w-3 h-3" }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path d="M8 0l6 8-6 8-6-8z" />
  </svg>
);

export const StarDeco: React.FC<{ className?: string }> = ({ className = "text-sky-500 w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);
