"use strict";
let excNum = +prompt("Lütfen bir sayı giriniz:");
let result = excNumber(excNum);

function excNumber(Number) {
  let total = 0;
  for (let i = 1; i <= Number; i++) {
    if (Number % i == 0) {
      total += i;
    }
  }
//   total += 1 + Number;
  if (total == Number * 2) {
    alert(`${Number} sayısı mükemmel sayıdır.`);
  } else {
    alert(`${Number} sayısı zorttirik bir sayıdır`);
  }
}
