module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // Make sure these paths match your file structure
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FFBF01",
        
      },
    },
  },
  plugins: [],
};

