import {
  Balance,
  ChatBubble,
  CheckCircleOutlined,
  Devices,
  EmojiNature,
  EmojiEvents,
  Favorite,
  PeopleAlt,
  SentimentSatisfied,
} from '@mui/icons-material'
import type { SxProps } from '@mui/material'

type MapToIconProps = {
  icon: Icon
  style: SxProps
}

function MapToIcon({ icon, style }: MapToIconProps) {
  switch (icon) {
    case 'balance':
      return <Balance sx={style} />
    case 'bubble':
      return <ChatBubble sx={style} />
    case 'checkMark':
      return <CheckCircleOutlined sx={style} />
    case 'computer':
      return <Devices sx={style} />
    case 'flower':
      return <EmojiNature sx={style} />
    case 'heart':
      return <Favorite sx={style} />
    case 'people':
      return <PeopleAlt sx={style} />
    case 'sentiment':
      return <SentimentSatisfied sx={style} />
    case 'trophy':
      return <EmojiEvents sx={style} />
    default:
      return null
  }
}

export default MapToIcon
