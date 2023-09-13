type BenchMark = {
  name: string
  score: number
}

type Driver = {
  name: string
  score: number,
  previousScore: number,
  icon: string,
  benchMark: BenchMark
}

const drivers: Driver[] = [{
  name: 'hello',
  score: 4.2,
  previousScore: 2.4,
  icon: 'smallOne',
  benchMark: {
    name: 'a benchmark',
    score: 2.1
  }
}]

export default drivers