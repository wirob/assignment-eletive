import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { CheckCircleOutlined, RocketLaunch } from '@mui/icons-material'
import { useEffect, useState } from 'react'

type ContainerProps = {
  title: string
}

function Container(props: ContainerProps) {
  const { title } = props

  return (
    <Grid item xs={12} md={6}>
      <Paper sx={{ padding: (theme) => theme.spacing(3) }}>
        <Typography variant="h6">{title}</Typography>
        <Driver />
      </Paper>
    </Grid>
  )
}

function Driver() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex">
        <CheckCircleOutlined sx={{ fontSize: 48 }} />
        <Box>
          <Typography>Workload</Typography>
          <Typography>Benchmark - Media Telecom</Typography>
        </Box>
      </Box>
      <Typography>4.1</Typography>
    </Box>
  )
}

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

  const theme = useTheme()
  const isMedium = useMediaQuery(theme.breakpoints.up('md'))

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
          <RocketLaunch fontSize="medium" />
          <Typography variant="h5">Drivers</Typography>
        </Box>
        <Grid container spacing={4}>
          <Container title="Highest rating" />
          <Container title="Lowest rating" />
          <Grid item xs={12}>
            <Paper sx={{ padding: (theme) => theme.spacing(3) }}>
              <Typography variant="h6">Other</Typography>
              <Grid container spacing={isMedium ? 10 : 0}>
                <Grid item xs={12} md={6}>
                  <Driver />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid item>
                    <Driver />
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default App
