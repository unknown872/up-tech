/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "my_bg_image": "url('/assets/bg-tech.jpg')",
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadein500: "fade-in ease-in-out 1s",
        fadein300: "fade-in ease-in-out 2500ms",
        fadein500: "fade-in ease-in-out 2000ms",
        fadein900: "fade-in ease-in-out 1500ms",
        fadein1000: "fade-in ease-in-out 2000ms",
        fadein3000: 'fade-in ease-in-out 3000ms'
      },
    },
  },
  plugins: [],
};
