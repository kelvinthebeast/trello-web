import { createTheme } from '@mui/material/styles'

const theme = createTheme({
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
