import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import { Tabs } from '@mui/material'
function App() {
  return (
    <>
      <Tabs></Tabs>
      <div>Hello day la co truong kelvin the beast</div>
      <br />

      <div>Le Thanh Nhan</div>
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
