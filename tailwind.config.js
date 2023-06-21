/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      wantone: ['wantone'],
      airnt: ['airnt'],
    },
    colors:{
      'mainblue':'#0000ff',
      'black':'#000',
      'red':'#ff0000'
    }
  },
  plugins: [],
}

