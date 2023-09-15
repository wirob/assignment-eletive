function sortHighestRating(d: Driver[]) {
  const copy = d.slice()
  return copy.sort((driverA, driverB) => driverB.score - driverA.score)
}

function sortLowestRating(d: Driver[]) {
  const copy = d.slice()
  return copy.sort((driverA, driverB) => driverA.score - driverB.score)
}

export { sortHighestRating, sortLowestRating }
