import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'max-sm': { max: '639px' }, // Telas menores que 640px
        'max-md': { max: '767px' }, // Telas menores que 768px
        'max-lg': { max: '1023px' }, // Telas menores que 1024px
        'max-xl': { max: '1279px' }, // Telas menores que 1280px
      },
    },
  },
  plugins: [],
} satisfies Config;
