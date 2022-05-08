"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  const d = (b ** 2) - (4 * a * c);
  if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  }
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let arr = [percent, contribution, amount, date];
  for (let i = 0; i > arr.length; i++) {
    if (isNaN(arr[i])) {
      parseInt(arr[i]);
    } else {
      return `Параметр ${arr[i]} содержит неправильное значение ${arr[i]}`;
    }
  }



  let debit = amount - contribution;
  let now = new Date();
  date = Math.ceil((date - now) / 1000 / 60 / 60 / 24 / 30.5);
  let P = (percent / 100) / 12;
  let st = P + P / (((1 + P)));
  let pay = debit * (P + (P / (((1 + P) ** date) - 1)));
  totalAmount = contribution + (pay * date);
  totalAmount = parseInt(totalAmount).toFixed(2);

  // код для задачи №2 писать здесь

  return totalAmount;
}
