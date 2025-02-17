import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-light': '#F8F8F8',
        'fg-light': '#333333',
        'container-orange': '#FFA500',
        'container-lime': '#32CD32',
        'container-purple': '#800080',
        'bg-dark': '#121212',
        'fg-dark': '#E0E0E0',
        'container-orange-dark': '#FF6600',
        'container-lime-dark': '#98FB98',
        'container-purple-dark': '#800080',
      },
    },
  },
  plugins: [],
} satisfies Config;
