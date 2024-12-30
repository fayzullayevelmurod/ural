/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ['"Rubik"'],
        Inter: ['"Inter"'],
        Oswald: ['"Oswald"'],
        SegoeUI: ['"SegoeUI"'],
      },
      colors: {
        "black": "#000000",
        "dark-08": "#080808",
        "dark-4A": "#4A4A4A",
        "dark-8B": "#8B8B8B",

        "white": "#FFFFFFF",
        "white-FB": "#FBFBFB",
        "white-ED": "#EDEDED",
        "white-E0": "#E0E0E0",

        "coral": "#FFC900",
      },
      // screens: {
      //   nokia: '360px',
      //   phone: '480px',
      //   tablet: '768px',
      //   laptop: '1440px',
      //   desktop: '1920px',
      // },
      // backgroundImage: {
      //   'green-gradient': 'linear-gradient(180deg, #32D951 0%, #26C644 100%)',
      //   'blue-gradient': 'linear-gradient(180deg, #37AEE2 0%, #1E96C8 100%)'
      // },
    },
  },
  plugins: [],
}

