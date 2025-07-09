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
      screens: {
        'mx': '128rem' // should be identical to spacing-mx
      },
      spacing: {
        'mx': '128rem', // should be identical to screens-mx

        'section-w': '85vw',//'22.375rem',
        'section-w-md': '85vw',//'41.25rem',
        'section-w-lg': '62.5rem',
        
        'card-grid-gap-x': '1.25rem',
        'card-grid-gap-y': '3.5rem',

        'card-gap': '0.5rem',

        'easy-icon-w': '2rem',
      },
      borderRadius: {
        'image': '2rem',
      },
      backgroundImage: {
        'hero-img': "url('/bg/hero_mobile.svg')",
        'hero-md': "url('/bg/hero_md.svg')",
        'hero-lg': "url('/bg/hero_lg.svg')",
        'hero-xl': "url('/bg/hero_xl.svg')",

        'footer-img': "url('/bg/bg_footer.svg')",
        'footer-md': "url('/bg/bg_footer_md.svg')",
        'footer-lg': "url('/bg/bg_footer_lg.svg')",
        'footer-xl': "url('/bg/bg_footer_xl.svg')",

        'proj-hero-img': "url('/bg/side_page_img.svg')",
        'proj-hero-md': "url('/bg/side_page_md.svg')",
        'proj-hero-lg': "url('/bg/side_page_lg.svg')",
        'proj-hero-xl': "url('/bg/side_page_xl.svg')",
      },
      backgroundSize: {
        'cover-x': "100% auto",
        'cover-y': "auto 100%",
      }
    },
  },
  plugins: [],
} satisfies Config;
