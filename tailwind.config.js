/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", ],
  theme: {
    extend: {
      colors: {
        "softBlue": "hsl(231, 69%, 60%)",
        "softRed": "hsl(0, 94%, 66%)",
        "grayshBlue": "hsl(229, 8%, 60%)",
        "veryDarkBlue": "hsl(229, 31%, 21%)"
      },
      fontFamily: {
        "Rubik": ["Rubik", "sans-serif"],
      }
    },
  },
  plugins: [],
}

