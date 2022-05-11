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
  if (isNaN(percent)) {
    return `Параметр процентная ставка содержит неправильное значение ${percent}`
  }
  if (isNaN(contribution)) {
    return `Параметр Взнос содержит неправильное значение ${contribution}`
  }
  if (isNaN(amount)) {
    return `Параметр сумма содержит неправильное значение ${amount}`
  }
  if (isNaN(date)) {
    return `Параметр Дата содержит неправильное значение ${date}`
  }
  if (percent === toString(percent)) {
    Number(percent);
  }
  if (contribution === toString(contribution)) {
    Number(contribution);
  }
  if (amount === toString(amount)) {
    Number(amount);
  }
  if (date === toString(date)) {
    Number(date);
  }


  let debit = amount - contribution;
  let now = new Date();
  date = Math.ceil((date - now) / 1000 / 60 / 60 / 24 / 30.5);
  let P = percent / 100 / 12;
  let pay = debit * (P + (P / (((1 + P) ** date) - 1)));
  totalAmount = pay * date;
  totalAmount = totalAmount.toFixed(2);
  totalAmount = Number(totalAmount);


  // код для задачи №2 писать здесь

  return totalAmount;
}
