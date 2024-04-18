/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
    theme: {
      extend: {
        colors: {
          bluegray: {
            "50": "#f7f8f9",
            "100": "#dadee3",
            "200": "#bcc3cd",
            "300": "#9fa9b7",
            "400": "#818ea1",
            "500": "#64748b",
            "600": "#556376",
            "700": "#465161",
            "800": "#37404c",
            "900": "#282e38",
          },
        },
        fontFamily: {
          pretendard: ["Pretendard"],
        },
      },
    },
  plugins: [],
}

