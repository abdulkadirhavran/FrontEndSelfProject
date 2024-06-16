// let array = [0,1,2,3,4,5,6,7,8,9,10]

// for (let i = 10; i < array.length; i--) {
//   const element =[i];
//   console.log(element);
//   if (i == -5) {
//     break;
//   }
// }

// ++++---- FOR LOOP ----++++++

/* for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log("naber");
  } else {
    console.log("Akad");
  }
} */

let total = 0;

for (let i = 55; i > 0; i--) {
  total += i;
  console.log(i);
  console.log("Sayı toplamı:" + total);
}

// +++++------ Do-While -------++++
let a = 0;

do {
  a++;
  console.log(a);
} while (a < 20);

let calc = 0;
let totalValue = 0;

do {
  if (calc % 2 == 0) {
    totalValue += calc;
  }
  calc = calc + 1;
} while (calc < 10);

console.log(`Sayıların toplamı: ${totalValue}`);
