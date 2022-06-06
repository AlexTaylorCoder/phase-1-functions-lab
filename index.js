// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
    //returns the number of blocks given a value
    const loc = 42
    return Math.abs(dist-loc)
  }
  function distanceFromHqInFeet(dist) {
      const nDist = distanceFromHqInBlocks(dist)
      return nDist * 264
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(start-destination) * 264
  }
  function calculatesFarePrice(start, destination) {

    const dist= distanceTravelledInFeet(start,destination)
    if (dist > 2500) {
        return "cannot travel that far"
    }
    else if (dist > 400 && dist <= 2000){
        return (dist-400) * 0.02
    }
    else if (dist > 2000){
        return 25
    }
    else {
        return 0
    }
  }
