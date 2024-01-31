/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.js',
    './pages/**/*.{md,mdx}',
    './theme.config.tsx',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [
    nextui()
]
}
