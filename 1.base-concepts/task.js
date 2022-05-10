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
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(NaN)) {
      parseInt(arr[i]);
    } else {
      return `Параметр ${arr[i]} содержит неправильное значение ${arr[i]}`
    }
  }
  /*if (percent === NaN) {
    parseInt(percent);
  }
  else {
    return `Параметр ${percent} содержит неправильное значение ${percent}`
  }
  if (contribution === NaN) {
    parseInt(contribution);
  }
  else {
    return `Параметр ${contribution} содержит неправильное значение ${contribution}`
  }
  if (amount === NaN) {
    parseInt(amount);
  }
  else {
    return `Параметр ${amount} содержит неправильное значение ${amount}`
  }
  if (date === NaN) {
    parseInt(date);
  }
  else {
    return `Параметр ${date} содержит неправильное значение ${date}`
  }*/


  let debit = amount - contribution;
  let now = new Date();
  date = Math.ceil((date - now) / 1000 / 60 / 60 / 24 / 30.5);
  let P = percent / 100 / 12;
  let pay = debit * (P + (P / (((1 + P) ** date) - 1)));
  totalAmount = contribution + (pay * date);
  totalAmount = totalAmount.toFixed(2);
  totalAmount = parseInt(totalAmount);

  // код для задачи №2 писать здесь

  return totalAmount;
}
