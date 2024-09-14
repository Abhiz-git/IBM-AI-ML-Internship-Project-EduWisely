/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        logo: "'Josefin Sans', sans-serif",
        body: " 'Roboto', sans-serif",
      },
      aria: {
        current: "current=page",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
