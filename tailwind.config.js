/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["44px", "28px"],
      xl: ["72px", "32px"],
    },
    fontFamily: {
      'vibes' : "Great Vibes"
    }
  },
  plugins: [],
};
