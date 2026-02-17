/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk neon palette
        neon: {
          cyan: '#00F0FF',
          pink: '#FF2D95',
          purple: '#B026FF',
          yellow: '#FFE600',
          green: '#39FF14',
          orange: '#FF6B00',
        },
        cyber: {
          bg: '#0A0A0F',
          darker: '#06060A',
          card: '#111118',
          surface: '#16161F',
          border: '#1E1E2E',
          glow: '#1A1A2E',
        },
      },
      fontFamily: {
        sans: ['Orbitron', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Rajdhani', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Share Tech Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease forwards',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'bounce-in': 'bounceIn 0.6s ease forwards',
        'shake': 'shakeX 0.45s ease',
        'pulse-slow': 'pulse 3s ease infinite',
        'spin-slow': 'spin 1.2s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 3s infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { opacity: 0, transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        shakeX: {
          '0%,100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-8px)' },
          '75%': { transform: 'translateX(8px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0,240,255,0.3), 0 0 20px rgba(0,240,255,0.1)' },
          '50%': { boxShadow: '0 0 20px rgba(0,240,255,0.6), 0 0 60px rgba(0,240,255,0.2)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '41%': { opacity: 1 },
          '42%': { opacity: 0.8 },
          '43%': { opacity: 1 },
          '45%': { opacity: 0.3 },
          '46%': { opacity: 1 },
        },
        borderGlow: {
          '0%': { borderColor: 'rgba(0,240,255,0.3)' },
          '100%': { borderColor: 'rgba(255,45,149,0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(0,240,255,0.3), 0 0 40px rgba(0,240,255,0.1)',
        'neon-pink': '0 0 10px rgba(255,45,149,0.3), 0 0 40px rgba(255,45,149,0.1)',
        'neon-purple': '0 0 10px rgba(176,38,255,0.3), 0 0 40px rgba(176,38,255,0.1)',
        'neon-green': '0 0 10px rgba(57,255,20,0.3), 0 0 40px rgba(57,255,20,0.1)',
      },
      dropShadow: {
        'neon-cyan': '0 0 8px rgba(0,240,255,0.6)',
        'neon-pink': '0 0 8px rgba(255,45,149,0.6)',
      },
    },
  },
  plugins: [],
};
