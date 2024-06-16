let num = prompt("Lütfen Sayı giriniz:");
let total = 0;
for (let i = 0; i < num.length; i++) {
  let fig = num.charAt(i);
  total += fig * fig * fig;
}
if (num == total) {
  alert(`${num} bir armstrong sayıdır`);
} else {
  alert(`${num} bir armstrong sayı değildir`);
}
