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

export default MapToIcon
