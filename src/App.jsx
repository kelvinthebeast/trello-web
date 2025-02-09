
import { Box, TextField, Button, FormControl, InputLabel, Select } from '@mui/material'
import { MenuItem } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >

        <MenuItem value='light'>Light</MenuItem>
        <MenuItem value='dark'>Dark</MenuItem>
        <MenuItem value='system'>System</MenuItem>
      </Select>
    </FormControl>
  )
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')

  console.log('prefersDarkscheme: ', prefersDarkMode)
  console.log('prefersLightMode: ', prefersLightMode)

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
      <ModeSelect/>
      <br/>
      <ModeToggle/>
      <br />
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
