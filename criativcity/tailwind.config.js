/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            'planets': "url('../assets/Group.png')",
            
          },
         colors: {
            primary: "#00040f",
            secondary: "#00f6ff",
            dimWhite: "rgba(255, 255, 255, 0.7)",
            dimBlue: "rgba(9, 151, 124, 0.1)",
            dimPink:"rgba(217, 114, 254, 1)",
            dimPurple: "rgba(0, 249, 249, 1)",
         },
      },
      fontFamily: {
         pressfont: 'Yatra One',
         Lato :'Lato'
      },
   },
   plugins: [],
};
