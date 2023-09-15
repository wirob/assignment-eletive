import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { RocketLaunch } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import Driver from './Driver'
import { sortHighestRating, sortLowestRating } from './lib/sorters'

type ContainerProps = {
  title: string
  drivers: Driver[]
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
