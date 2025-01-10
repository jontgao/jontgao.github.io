import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      onwhite: "#F9F7F2",
      pitch: "#000000",
      mustard: "#D4AF2A",
      ketchup: "#E73C31",
      mayo: "#4193F3",
    },
    
    fontFamily: {
      sans: ['Satoshi Variable', 'Helvetica', 'Arial', 'sans-serif'],
    },

    extend: {
      spacing: {
        'exfornow': '96rem',
      },
      borderRadius: {
        'exfornow': '2rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
