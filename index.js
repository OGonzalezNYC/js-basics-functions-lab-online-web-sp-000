// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  let blocks;
  pickup <= 42 ? blocks = 42 - pickup : blocks = pickup - 42;
  return blocks;
}

function distanceFromHqInFeet(pickup) {
let feet;
feet = distanceFromHqInBlocks(pickup) * 264;
  return feet;
}

function distanceTravelledInFeet(start, destination)  {
  let distanceInfeet;
  start >= destination ? distanceInfeet = (start - destination) * 264 : distanceInfeet = (destination - start) * 264;
  return distanceInfeet;
}

function calculatesFarePrice(start, destination) {
  let price;
  let distanceInFeet = distanceTravelledInFeet(start, destination)
  if (distanceInFeet <= 400) {
    price = 0
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) { 
    price = 0.02 * (distanceInFeet - 400);
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    price = 25;
  } else { price = 'cannot travel that far' 
  }
  return price;
}