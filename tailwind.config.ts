import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0C2340',
        'navy-soft': '#12355B',
        mist: '#F5F7FA',
        slate: '#667085'
      },
      boxShadow: {
        soft: '0 20px 45px rgba(12, 35, 64, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
