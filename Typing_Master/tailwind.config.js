/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      animation: {
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-in'
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' }
        }
      },
      colors: {
        themeColor: "#324A5E",
        themeColorHover: "#4a6a7d",
      },
    },
  },
  plugins: [],
};
