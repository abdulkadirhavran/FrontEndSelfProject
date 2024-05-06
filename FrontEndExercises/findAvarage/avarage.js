// Vize 30%,Final 50%,Proje 20%

let vize = Number(prompt("Vize notunu giriniz:"));
let final = +prompt("Final notunu giriniz:");
let proje = +prompt("Proje notunu giriniz:");

let _ortalama = (vize * 0.3) + (final * 0.5) + (proje * 0.2);

if (_ortalama >= 90 && proje > 75) {
  alert("Çok başarılısınız.");
} 
else if (_ortalama > 60 && proje > 50) {
  alert("Başarılısınız.");
} 
else {
  alert("Proje notunuz yeterli değil.");
}
