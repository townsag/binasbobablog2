/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
        colors: {
            'pale-green': '#E8F3D6',
            'pale-yellow': '#FCF9BE',
            'pale-orange': '#FFDCA9',
            'burnt-orange': '#FAAB78',
            'royal-green': '#00473e'
        }
    },
  },
  plugins: [],
}

