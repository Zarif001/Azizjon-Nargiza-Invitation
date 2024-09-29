/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["0.875rem", "1.25rem"], // 14px, 20px
      m: ["1.5rem", "1.5rem"],     // 24px, 24px
      lg: ["2.75rem", "2.25rem"],   // 44px, 36px
      xl: ["3.5rem", "2.75rem"],    // 56px, 44px
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
