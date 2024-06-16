let primeNum = Number(prompt("Lütfen bir sayı giriniz:"));
let result = true;
for (let i = 2; i <= Math.floor(primeNum / 2); i++) {
  if (primeNum % i === 0) {
    result = false;
    break;
  }
}

if (result) {
  alert(`${primeNum} sayısı asaldır.`);
} else {
  alert(`${primeNum} sayısı asal değildir.`);
}
