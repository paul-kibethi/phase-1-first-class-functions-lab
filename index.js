// Return the first two drivers
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };


// Return an array of the last two drivers
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };


// Selecting Drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Multiply fare
const createFareMultiplier = function (integer) {
    return function (fare) {
      return fare * integer;
    };
  };

// Function that doubles fare
const fareDoubler = createFareMultiplier(2);

// Function that tripples fare
const fareTripler = createFareMultiplier(3);

// Select different drivers
const selectDifferentDrivers = function (drivers, driverSelector) {
    return driverSelector(drivers);
  };
