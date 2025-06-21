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
      sans: ['Satoshi', 'Helvetica', 'Arial', 'sans-serif'],
    },

    extend: {
      spacing: {
        'section-w': '85vw',//'22.375rem',
        'section-w-md': '85vw',//'41.25rem',
        'section-w-lg': '62.5rem',
        
        'card-grid-gap-x': '1.25rem',
        'card-grid-gap-y': '3.5rem',

        'card-gap': '0.5rem',

        'icon-w': '2rem',
      },
      borderRadius: {
        'image': '2rem',
      },
      backgroundImage: {
        'hero-img': "url('/hero_mobile.svg')",
        'hero-md': "url('/hero_md.svg')",
        'hero-lg': "url('/hero_lg.svg')",
        'hero-xl': "url('/hero_xl.svg')",

        'footer-img': "url('/bg_footer.svg')",
        'footer-md': "url('/bg_footer_md.svg')",
        'footer-lg': "url('/bg_footer_lg.svg')",
        'footer-xl': "url('/bg_footer_xl.svg')",

        'side-page-img': "url('/side_page_img.svg')",
      },
      backgroundSize: {
        'cover-x': "100% auto",
        'cover-y': "auto 100%",
      }
    },
  },
  plugins: [],
} satisfies Config;
