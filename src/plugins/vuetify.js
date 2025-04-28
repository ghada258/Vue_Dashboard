import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'myCustomTheme',  
    themes: {
      myCustomTheme: {              
        dark: false,
        colors: {
          primary:   '#0A2C47',      // blue 950
          secondary: '#F0F0F0',      // silver 100
          info:"#E3E3E3",//silver 200
          success:   '#F7F7F7',      // silver 50
          tertiary:  '#D23616', //red 800

        },
      },
    },
  },
})
