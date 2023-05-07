function getArrayParams(...arr) {

  let min, max, sum, avg;

	max = Math.max.apply(null, arr);
	min = Math.min.apply(null, arr);
	sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
	avg = +(sum / arr.length).toFixed(2);
	
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

  let sum;

if (arr.length === 0) {
	return 0;
} else {
	sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}
return sum;
}

function differenceMaxMinWorker(...arr) {
  
  let min, max, difference;

  if (arr.length === 0) {
    return 0;
  } else {
  
    max = Math.max.apply(null, arr);
    min = Math.min.apply(null, arr);
    difference = max - min;
  }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let differenceEven;
  
  if (arr.length === 0) {
    return 0;
  } else {
  
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    differenceEven = sumEvenElement - sumOddElement;
  
  }
  return differenceEven;
}

function averageEvenElementsWorker(...arr) {
  
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let averageEven;
  
  if (arr.length === 0) {
    return 0;
  } else {
  
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
      averageEven = sumEvenElement / countEvenElement;
    }
  
  }
  return averageEven;
}

function makeWork (arrOfArr, func) {
  
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
      result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
