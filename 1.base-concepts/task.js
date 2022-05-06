"use strict";
function solveEquation(a, b, c) {
  let arr;
  let x1;
  let x2;
  const d = (b ** 2) - (4 * a * c);
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);

  } else if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  } else {
    return null;
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let arr = [percent, contribution, amount, date];
  for (let i = 0; i > arr.length; i++) {
    if (isNaN(arr[i]))) {
      Number(arr[i]);
      return arr[i];
    } else {
      return `Параметр ${arr[i]} содержит неправильное значение ${arr[i]}`;
    }
  }

  let debit = amount - contribution;
  let now = new Date(year, month, date);
  date = (date - now) * 60;
  let P = (percent / 100) / 12;
  let pay = debit * (P + (P / (((1 + P) ** date) - 1)));
  totalAmount = contribution + (pay * date);
  totalAmount.toFixed(2);
  parseFloat(totalAmount);

  // код для задачи №2 писать здесь

  return totalAmount;
}
