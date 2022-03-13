import { extendTheme, theme as base } from '@chakra-ui/react'

import { createBreakpoints } from '@chakra-ui/theme-tools'

// const breakpoints = createBreakpoints({
//   sm: '32em', // 480px
//   md: '40em', // 636px
//   lg: '74em', // 992px  - Main screen
//   xl: '80em', // 1280px - Main screen
//   '2xl': '96em',
// })

const theme = extendTheme({
  // breakpoints,
  colors: {
    brand: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
    },
  },
  fonts: {
    // heading: `Rubik, ${base.fonts?.heading}`,
    // body: `Cabin, ${base.fonts?.body}`,
  },
  components: {
    Button: { baseStyle: { _focus: { boxShadow: 'none' } } },
    Link: { baseStyle: { _focus: { boxShadow: 'none' } } },
  },
  styles: {
    global: {
      body: {
        background: '#fff',
      },
    },
  },
})

export default theme
