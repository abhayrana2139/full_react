/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderWidth:{
      DEFAULT:'1px',
      '1': "2px",
      '3': "3px",
      '4': "4px",
    },
    extend: {

      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
       
        Poppins: ["Poppins Mono"],
      
        Roboto: ['Lato'],
        Roboto:['Roboto'],

       },

       


      backdropOpacity:['active'],
      borderWidth:['active'],
    },
  },
  plugins: [],
}
