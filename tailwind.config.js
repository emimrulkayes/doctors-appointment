/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorTheme: {
          primary: '#0FCFEC',
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3D4451",
        }
      }
    ]
  },
  theme: {
    extend: {
      boxShadow: {
        'lg': '-1px 15px 50px 0px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [require("daisyui")],
}
