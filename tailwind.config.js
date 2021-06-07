module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        lilac:{
          light:"#5850eb",
          dark:"#5045cd",
          default:"#5f5cd8",
          black: "#3e329b"
        }
      },
      Color:{
        lilac:{
          light:"#5850eb",
          dark:"#5045cd",
          default:"#5f5cd8",
          black: "#3e329b"
        }
      },
      borderColor:{
        lilac:{
          light:"#5850eb",
          dark:"#5045cd",
          default:"#5f5cd8",
          black: "#3e329b"
        }
      },
      spacing: {
        '100': '30rem',
        '102': '34rem',
        '104': '36rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
