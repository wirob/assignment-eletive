function sortHighestRating(d: Driver[]) {
  return d.sort((driverA, driverB) => driverB.score - driverA.score)
}

function sortLowestRating(d: Driver[]) {
  return d.sort((driverA, driverB) => driverA.score - driverB.score)
}

export { sortHighestRating, sortLowestRating }
