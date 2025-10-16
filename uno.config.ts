import { defineConfig, presetUno, presetIcons } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      cdn: 'https://esm.sh/'
    })
  ],
  theme: {
    colors: {
      primary: {
        50: '#fef3ff',
        100: '#fce7ff',
        200: '#f9cfff',
        300: '#f5a8ff',
        400: '#ef72ff',
        500: '#e23cff',
        600: '#c515e8',
        700: '#a40bc4',
        800: '#870da0',
        900: '#6f0f82',
      },
      secondary: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
      },
    },
    animation: {
      keyframes: {
        float: '{0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); }}',
        pulse3d: '{0%, 100% { transform: scale3d(1, 1, 1); } 50% { transform: scale3d(1.05, 1.05, 1.05); }}',
        slideUp: '{from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; }}',
        shimmer: '{0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; }}',
        wiggle: '{0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); }}',
        heartbeat: '{0%, 100% { transform: scale(1); } 14% { transform: scale(1.3); } 28% { transform: scale(1); }}',
        glow: '{0%, 100% { box-shadow: 0 0 5px currentColor; } 50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }}',
      },
      durations: {
        float: '3s',
        pulse3d: '2s',
        slideUp: '0.5s',
        shimmer: '2s',
        wiggle: '1s',
        heartbeat: '1.5s',
        glow: '2s',
      },
      timingFns: {
        float: 'ease-in-out',
        pulse3d: 'ease-in-out',
        slideUp: 'ease-out',
        shimmer: 'linear',
        wiggle: 'ease-in-out',
        heartbeat: 'ease-in-out',
        glow: 'ease-in-out',
      },
      counts: {
        float: 'infinite',
        pulse3d: 'infinite',
        shimmer: 'infinite',
        wiggle: 'infinite',
        heartbeat: 'infinite',
        glow: 'infinite',
      }
    },
    backdropBlur: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
    }
  },
  shortcuts: {
    'glass-panel': 'backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg',
    'glass-panel-dark': 'backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl shadow-2xl',
    'btn-primary': 'px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95',
    'btn-secondary': 'px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95',
    'btn-ghost': 'px-4 py-2 backdrop-blur-sm bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg transition-all duration-200',
    'stat-bar': 'h-3 rounded-full bg-gradient-to-r transition-all duration-500 shadow-inner',
  },
});
