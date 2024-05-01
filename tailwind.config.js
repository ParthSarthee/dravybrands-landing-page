/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        'primary': '#D06E7C',
        'creators': '#BC9AFF',
        'school': '#4DE686',
        'school-light': '#9BFFC0',

        //021
        'zero': '#D06E7C',
        "logo-back": '#1A1A1A',
        "btn-back": '#ff715d',
        "btn-hover": '#442925',

        //022
        'outerBack': '#F1F1F1',
        'oran': '#FF6F4F',
        'flee': '#F2ECF7',
        'fleeb': '#C6C1CA',
        'fleebox1': '#150D1C',
        'fleebox': '#432957',
        'fleebb1': '#29262B',
        'trii': '#F4E8E4',
        'triib': '#FFCEBF',
        'triib1': '#FF8D69',
        'triib1g': '#CFA1FE',
        'triibb': '#442925',
        'triibbtn': '#FF715D',
        'triib2': '#3E7960',
        'triibb2': '#1A2A23',
        'triibbt': '#88918D',
        'triibbt2': '#80F2E1',
        'triibbtn2': '#3E7960',
        'triib3': '#29262B',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
