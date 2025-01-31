import type { Config } from "tailwindcss";

// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        accent: '#10B981',
        background: {
          dark: '#1F2937',
          darker: '#111827',
          card: '#2D3748'
        }
      }
    },
  },
}