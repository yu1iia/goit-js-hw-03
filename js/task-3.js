'use strict';

const findBestEmployee = function (employees) {
  const resultValues = Object.values(employees);
  let bestResult = resultValues[0];

  for (let i = 1; i <= resultValues.length; i += 1) {
    if (resultValues[i] > bestResult) {
      bestResult = resultValues[i];
    }
  }

  const employeeEntries = Object.entries(employees);
  let bestEmployee;
  for (const employeeEntry of employeeEntries) {
    if (employeeEntry.includes(bestResult)) {
      bestEmployee = employeeEntry[0];
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
