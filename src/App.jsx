import { Box, TextField, Button } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  console.log(mode)
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeToggle />
      <div>My name is Kelvin the beast</div>
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
