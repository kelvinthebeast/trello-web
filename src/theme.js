import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        background: { default: '#ffffff' },
        text: { primary: '#000000' }
      }
    },
    dark: {
      palette: {
        mode: 'dark',
        background: { default: '#121212' },
        text: { primary: '#ffffff' }
      }
    }
  }
})

export default theme
