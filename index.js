// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return (Math.abs(someValue - 42));
}

function distanceFromHqInFeet(someValue) {
    return (distanceFromHqInBlocks(someValue) * 264);
}

function distanceTravelledInFeet(start, destination) {
    return ((Math.abs(destination - start)) * 264);
  }

  function calculatesFarePrice(start, destination) {
    if (((Math.abs(destination - start)) * 264) < 400) {
        return 0;
    } else if (((Math.abs(destination - start)) * 264) < 2000) {
        return (0.02 * (((Math.abs(destination - start)) * 264) - 400));
    } else if (((Math.abs(destination - start)) * 264) < 2500 && (((Math.abs(destination - start)) * 264) > 2000)) {
        return 25;
    } else (((Math.abs(destination - start)) * 264) > 2500)
        {
        return "cannot travel that far";
    }
  }