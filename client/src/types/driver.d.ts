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

type BenchMark = {
  name: string
  score: number
}

type Driver = {
  name: DriverName
  score: number
  previousScore: number
  icon: Icon
  benchMark: BenchMark
}
