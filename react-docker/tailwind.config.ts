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
        'section-w': '62.5rem',
        
        'card-grid-gap-x': '1.25rem',
        'card-grid-gap-y': '3.5rem',

        'card-gap': '0.5rem',

        'icon-w': '2rem',
      },
      borderRadius: {
        'image': '2rem',
      },
      backgroundImage: {
        'hero-img': "url('/hero_img.svg')",
        'footer-img': "url('/footer_bg.svg')",
        'side-page-img': "url('/side_page_img.svg')",
      },
      backgroundSize: {
        'cover-x': "100% auto",
      }
    },
  },
  plugins: [],
} satisfies Config;
