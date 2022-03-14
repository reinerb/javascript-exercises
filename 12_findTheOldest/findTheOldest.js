const CURRENT_YEAR = 2022;

const findTheOldest = function (people) {
  let maxAge = 0;
  let maxAgeIndex = -1;

  for (let i = 0; i < people.length; i++) {
    if (!people[i]["yearOfDeath"] && people[i]["yearOfDeath"] !== 0) {
      age = CURRENT_YEAR - people[i]["yearOfBirth"];
    } else {
      age = people[i]["yearOfDeath"] - people[i]["yearOfBirth"];
    }

    if (maxAgeIndex == -1 || age > maxAge) {
      maxAge = age;
      maxAgeIndex = i;
    }
  }

  return people[maxAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
