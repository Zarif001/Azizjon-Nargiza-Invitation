/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      m: ["24px", "24px"],
      lg: ["44px", "36px"],
      xl: ["56px", "44px"],
    },
    fontFamily: {
      'vibes' : "Great Vibes",
      'SpringR' : "Spring-Regular",
      'SpringB' : 'Spring-Bold',
      'SpringBI': 'Spring-BoldItalic',
      'SpringI' : 'Spring-Italic',
      'SpringLI': 'Spring-LightItalic' 
    }
  },
  plugins: [],
};
