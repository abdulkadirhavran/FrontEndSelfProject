let names = ["Ali", "Veli", 49, 50, false, Boolean, true];

names.forEach((name) => {
  // Arraylerde forEach kullanmak daha güzel olur,tavsiye edilir.
  /*  alert(name); */
  console.log(name);
});

for (let i = 0; i < names.length; i++) {
  console.log(
    names[i]
  ); /* Açık kodda arrayi ,array uzunluğu kadar döndürür ama console.log(names[i]) şeklinde yazarsan array içinde ki değerleri döner. */
}

// +++++++++++----------  MATH FUNCTİON  -----------+++++++++++++

console.log(window);

let num = 3.58874;
let numb = -15;
console.log(num.toFixed(2)); // Result is  3.59

console.log(Math.floor(num)); // küsüratı aatar ve integer değer alır.

console.log(Math.ceil(num)); // Küsüratı olan sayının bir üst integer değeri alır 4,15 = 5

console.log(Math.abs(numb)); // Mutlak değer alma yöntemi

console.log(Math.PI);
console.log(Math.random()*100); //

console.log(Math.pow(numb, 2)); //Bir sayının kuvvetini almaya yarar.ÜSSEL FONK.
console.log(Math.pow(2, 3)); //Bir sayının kuvvetini almaya yarar.ÜSSEL FONK.
