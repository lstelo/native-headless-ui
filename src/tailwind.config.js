// tailwind.config.js
// const { plugin } = require('twrnc');

// or, you can use tailwinds plugin function:
const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        'font-tajawal': {
          fontFamily: "Tajawal"
        },
      });
    }),
  ],
};