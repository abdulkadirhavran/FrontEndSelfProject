let facNum = +prompt("Lütfen bir sayı giriniz:");
let result = 1;
for (let i = 1; i <= facNum; i++) {
  result *= i;
}

alert(`Sonuç : ${result}`);
