import { Box, Typography } from '@mui/material'
import MapToIcon from './MapToIcon'

type DriverProps = {
  driver: Driver
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

export default Driver
