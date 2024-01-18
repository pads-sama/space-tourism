/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontSize:{
        // headings
        heading1: ["var(--heading-1)"],
        heading2: ["var(--heading-2)"],
        heading3: ["var(--heading-3)"],
        heading4: ["var(--heading-4"],
        heading5: ["var(--heading-5)"],

        // subheadings
        subheading1: ["var(--subheading-1)"],
        subheading2: ["var(--subheading-2)"],

        //body text
        bodyFs:"var(--body-text)",
        fm: ["var(--fm)"]
      },
      colors:{
        primary: ["var(--black-clr)"],
        lightPurple: ["var(--light-purple-clr)"],
        light: ["var(--white-clr)"]
      },
      fontFamily:{
        barlow: ["var(--barlow)"],
        barlowCondense: ["var(--barlow-condense)"],
        bellefair: ["var(--bellefair)"]

      },
     
    },
    
  },
  plugins: [],
}

