/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}", // Include all Angular components and templates
    "./node_modules/flowbite/**/*.js" // Interactive Tailwind CSS classes from Flowbite
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C1563", //"#0358F1",
        secondary: "#0358F1",
        accent: "#4ECDFF",
        danger: "#DC2626",
        success: "#16A34A",
        neutral: "#64748B",
        secondaryOverlay: "#dce6f2"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

