export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {
      opacity: {
        '10': '0.1',
        '20': '0.2'
      },
      spacing: {
        'feet': '82rem',
        '1/3-screen': '20rem',
        '620':'620px'
      },
      colors: {
        'ghostWhite': '#F8F8FF'
      }
    }
  }
}