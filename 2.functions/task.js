// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum;
  let avg;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];


  }
  avg = (sum / arr.length).toFixed(2);
  avg = Number(arr.length);

  // Ваш код

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  //arrOfArr=[[1, 2, 3, 4], [10, 20, -10, -20]];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

  }
  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {

  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }

  // Ваш кода
  // for ...

  return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;

  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    res = min - max;
    res = Math.abs(res);
  }
  return res;
}
