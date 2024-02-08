/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* COLORS */
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        gray: "var(--gray)",
        accent: "var(--accent)",
        background: "var(--background)",
      },

      borderColor: {
        light: "var(--gray)",
      },

      /* FONTS */
      fontFamily: {
        Inter: "Inter, sans-serif",
        DMSans: "DMSans, sans-serif",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
