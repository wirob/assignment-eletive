import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import {
  Balance,
  ChatBubble,
  CheckCircleOutlined,
  Devices,
  EmojiNature,
  EmojiEvents,
  Favorite,
  PeopleAlt,
  RocketLaunch,
  SentimentSatisfied,
} from '@mui/icons-material'

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

type MapToIconProps = {
  icon: Icon
}

function MapToIcon({ icon }: MapToIconProps) {
  switch (icon) {
    case 'balance':
      return <Balance />
    case 'bubble':
      return <ChatBubble />
    case 'checkMark':
      return <CheckCircleOutlined />
    case 'computer':
      return <Devices />
    case 'flower':
      return <EmojiNature />
    case 'heart':
      return <Favorite />
    case 'people':
      return <PeopleAlt />
    case 'sentiment':
      return <SentimentSatisfied />
    case 'trophy':
      return <EmojiEvents />
    default:
      return null
  }
}

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
          <Driver driver={driver} key={driver.name} />
        ))}
      </Paper>
    </Grid>
  )
}

function Driver(props: DriverProps) {
  const {
    driver: { benchMark, name, score, icon },
  } = props
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex">
        <MapToIcon icon={icon} />
        <Box>
          <Typography>{name}</Typography>
          <Typography>{benchMark.name}</Typography>
        </Box>
      </Box>
      <Typography>{score}</Typography>
    </Box>
  )
}

function sortHighestRating(d: Driver[]) {
  return d.sort((driverA, driverB) => driverB.score - driverA.score)
}

function sortLowestRating(d: Driver[]) {
  return d.sort((driverA, driverB) => driverA.score - driverB.score)
}

function Drivers() {
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
            drivers={sortHighestRating(drivers.slice()).slice(0, 3)}
          />
          <Container
            title="Lowest rating"
            drivers={sortLowestRating(drivers.slice()).slice(0, 3)}
          />
          <Grid item xs={12}>
            <Paper sx={{ padding: (theme) => theme.spacing(3) }}>
              <Typography variant="h6">Other</Typography>
              <Grid container spacing={isMedium ? 10 : 0}>
                {isMedium ? (
                  <>
                    <Grid item xs={12} md={6}>
                      {drivers.slice(0, 3).map((driver) => (
                        <Driver driver={driver} key={driver.name} />
                      ))}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {drivers.slice(3, 6).map((driver) => (
                        <Driver driver={driver} key={driver.name} />
                      ))}
                    </Grid>
                  </>
                ) : (
                  drivers.map((driver) => (
                    <Grid item xs={12} key={driver.name}>
                      <Driver driver={driver} />
                    </Grid>
                  ))
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Drivers
