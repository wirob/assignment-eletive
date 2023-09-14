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

const drivers: Driver[] = [
  {
    name: 'Workload',
    score: 4.2,
    previousScore: 2.4,
    icon: 'checkMark',
    benchMark: {
      name: 'Media & Telecommunication',
      score: 2.1,
    },
  },
  {
    name: 'Relationship with Colleagues',
    score: 4.1,
    previousScore: 4.4,
    icon: 'people',
    benchMark: {
      name: 'Media & Telecommunication',
      score: 2.2,
    },
  },
  {
    name: 'Meaningfulness and Participation',
    score: 1.1,
    previousScore: 3.1,
    icon: 'trophy',
    benchMark: {
      name: 'Media & Telecommunication',
      score: 0.9,
    },
  },
  {
    name: 'Workplace and Tools',
    score: 4.9,
    previousScore: 4.8,
    icon: 'computer',
    benchMark: {
      name: 'Media & Telecommunication',
      score: 3.6,
    },
  },
  {
    name: 'Feedback and Commnucation',
    score: 3.7,
    previousScore: 3.5,
    icon: 'bubble',
    benchMark: {
      name: 'Media & Telecommunication',
      score: 3.2,
    },
  },
  {
    name: 'Health',
    score: 4.1,
    previousScore: 4.2,
    icon: 'bubble',
    benchMark: {
      name: 'Media & Telecommunication',
      score: 2.2,
    },
  },
  {
    name: 'Worklife balance',
    score: 2.1,
    previousScore: 2.0,
    icon: 'balance',
    benchMark: {
      name: 'Media & Telecommunication',
      score: 2.9,
    },
  },
  {
    name: 'Happiness',
    score: 3.9,
    previousScore: 4.4,
    icon: 'sentiment',
    benchMark: {
      name: 'Media & Telecommunication',
      score: 4.0,
    },
  },
  {
    name: 'Wellbeing',
    score: 4.5,
    previousScore: 4.4,
    icon: 'flower',
    benchMark: {
      name: 'Media & Telecommunication',
      score: 3.7,
    },
  },
]

export default drivers
