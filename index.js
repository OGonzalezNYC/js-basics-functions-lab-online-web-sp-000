// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  return Math.abs(42-street)
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, destination) {
  let num_feet = distanceTravelledInFeet(start, destination)
  if (num_feet <= 400) {
    return 0
  } else if (num_feet > 400 && num_feet <= 2000) {
    return .02 * (num_feet - 400)
  } else if (num_feet > 2000 && num_feet <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}