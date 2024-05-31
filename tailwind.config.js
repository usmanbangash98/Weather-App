module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#2563eb",
        accent: "#3b82f6",
        background: "#1e293b",
        card: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
