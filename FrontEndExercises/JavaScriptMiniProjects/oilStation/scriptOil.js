let diesel = 43;
let fuel = 41;
let LPG = 33;

const fueloilType = prompt("Yakıt tipi nedir:");
const liter = Number(prompt("Kaç litre yakıt isteniyor?"));

function fuelOil(fueloilType, liter) {
  const price = fueloilType * liter;
  return price;
}

if (fueloilType == diesel) {
  fuelOil(diesel, liter);
} else if (fueloilType == fuel) {
  fuelOil(fuel, liter);
}else if(fueloilType==LPG){}

/* if (fueloilType == fuel || fueloilType == diesel || fueloilType == LPG) {
  if (fueloilType == diesel) {
    let dieselprice = diesel * liter;
    alert("ücret:" + dieselprice);
  } else if (fueloilType == fuel) {
    let fuelprice = fuel * liter;
    alert("ücret:" + fuelprice);
  } else if (fueloilType == LPG) {
    let LPGprice = LPG * liter;
    alert("ücret:" + LPGprice);
  }
} else {
  alert("Lütfen geçerli bir yakıt tipi giriniz!");
} */
