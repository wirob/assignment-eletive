import { Box, Grid, Paper, Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { useEffect, useState } from 'react'

function App() {
  const [state, setState] = useState(null)

  useEffect(() => {
    if (state) return
    fetch('/api')
      .then((res) => res.json())
      .then((res) => {
        setState(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [state])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Box sx={{ height: '90%', width: '90%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <RocketLaunchIcon fontSize="medium" />
          <Typography variant="h5">Drivers</Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper>Something</Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>something elese</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>something more</Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default App
