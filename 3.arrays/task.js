
function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(item => item.gender === gender).map(ageGender => ageGender.age).reduce((accum, item, index, array) => accum + item / array.length, 0);
  return result;
}