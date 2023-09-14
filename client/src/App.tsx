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
  drivers: Driver[]
}

type DriverProps = {
  driver: Driver
}

type BenchMark = {
  name: string
  score: number
}

type Icon =
  | 'balance'
  | 'bubble'
  | 'checkMark'
  | 'computer'
  | 'flower'
  | 'heart'
  | 'people'
  | 'sentiment'
  | 'trophy'

type DriverName =
  | 'Workload'
  | 'Relationship with Colleagues'
  | 'Meaningfulness and Participation'
  | 'Workplace and Tools'
  | 'Feedback and Commnucation'
  | 'Health'
  | 'Worklife balance'
  | 'Happiness'
  | 'Wellbeing'

type Driver = {
  name: DriverName
  score: number
  previousScore: number
  icon: Icon
  benchMark: BenchMark
}

function Container(props: ContainerProps) {
  const { title, drivers } = props

  return (
    <Grid item xs={12} md={6}>
      <Paper sx={{ padding: (theme) => theme.spacing(3) }}>
        <Typography variant="h6">{title}</Typography>
        {drivers.map((driver) => (
          <Driver driver={driver} />
        ))}
      </Paper>
    </Grid>
  )
}

function Driver(props: DriverProps) {
  const {
    driver: { benchMark, name, score },
  } = props
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex">
        <CheckCircleOutlined sx={{ fontSize: 48 }} />
        <Box>
          <Typography>{name}</Typography>
          <Typography>{benchMark.name}</Typography>
        </Box>
      </Box>
      <Typography>{score}</Typography>
    </Box>
  )
}

function sortHighestRating(drivers: Driver[]) {
  return drivers.sort((driverA, driverB) => driverB.score - driverA.score)
}

function sortLowestRating(drivers: Driver[]) {
  return drivers.sort((driverA, driverB) => driverA.score - driverB.score)
}

function App() {
  const [drivers, setDrivers] = useState<null | Driver[]>(null)

  useEffect(() => {
    if (drivers) return
    fetch('/api')
      .then((res) => res.json())
      .then((res) => {
        setDrivers(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [drivers])

  const theme = useTheme()
  const isMedium = useMediaQuery(theme.breakpoints.up('md'))

  if (!drivers) return

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
          <Container
            title="Highest rating"
            drivers={sortHighestRating(drivers).slice(0, 3)}
          />
          <Container
            title="Lowest rating"
            drivers={sortLowestRating(drivers).slice(0, 3)}
          />
          <Grid item xs={12}>
            <Paper sx={{ padding: (theme) => theme.spacing(3) }}>
              <Typography variant="h6">Other</Typography>
              <Grid container spacing={isMedium ? 10 : 0}>
                <Grid item xs={12} md={6}>
                  {/* <Driver /> */}
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid item>{/* <Driver /> */}</Grid>
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
