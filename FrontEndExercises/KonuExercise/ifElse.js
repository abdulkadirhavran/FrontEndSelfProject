//Koşul yapıları--> Conditional

//ÖRNEK  1

// let note = Number(prompt("Notunuz:"));

// console.log(typeof note);

// if (note > 60) {

//     function pass(note) {
//   alert(`sınıfı başarıyla geçtiniz notunuz : ${note}`);
//   }
//   pass(note);
// } else {
//   //if-Else bloklarında else kullanmak zorunda değiliz.Ama İF bloğu zorunlu.

//     function fail(note) {
//   alert(`sınıfta kaldınız notunuz : ${note}. Tekrar görüşürüz Beybi.`);
//   }
//   fail(note);
// }

// ÖRNEK 2

// const yas = Number(prompt("Yasınız kaç:"));

// const nepotism = (prompt("Dayınız var mı:"));

// const positivenepo = true(nepotism);
// const negativeepo = false(nepotism);

// if(yas>= 18 || positivenepo ){
//     console.log("Ehliyet sınavına girebilirsin");

// }else{
//     alert("Ehliyet sınavına giremezsin");
// }

// ÖRNEK - 3

// Yol seçimi

const selectedRoad = Number(prompt("Choice your road please! : "));


if (selectedRoad==1) {
  alert(`seçilen yol ${selectedRoad}.'dir.`)
  
}
else if (selectedRoad==2) {
  alert(`seçilen yol ${selectedRoad}.'dir.`)
} 
else if(selectedRoad==3) {
  alert(`seçilen yol ${selectedRoad}.'dür.`)
}else{
  alert("Bok yoluna gittiniz!")
}