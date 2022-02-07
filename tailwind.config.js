module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { borderRadius: {
      '4xl': '2rem',},
      height: {
        '108': '27rem',
      },
      screens: {
        'largedesk': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'normaldesk': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'mindesk': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'tablet': {'max': '768px'},
        // => @media (max-width: 767px) { ... }
  
        'mobile': {'max': '500px'},
        // => @media (max-width: 639px) { ... }
      }
  },
  plugins: [],
}
}