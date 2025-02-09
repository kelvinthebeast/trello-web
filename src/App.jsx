import { Box, TextField, Button } from '@mui/material'
// import { useColorScheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

function App() {
  return (
    <>
      <Button>CLick the link to have s*x </Button>
      <div>My name is Kelvin the beast</div>
      <Typography variant="body2" color="text.secondary">100000$</Typography>
      <br />
      <div>Kelvin Thanh</div>
      <Box
        component='form'
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete='off'
      >
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        <TextField id='filled-basic' label='Filled' variant='filled' />
        <TextField id='standard-basic' label='Standard' variant='standard' />
      </Box>
    </>
  )
}

export default App
