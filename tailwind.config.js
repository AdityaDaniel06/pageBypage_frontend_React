/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
