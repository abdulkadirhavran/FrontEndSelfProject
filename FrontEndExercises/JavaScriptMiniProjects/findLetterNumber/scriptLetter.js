let text = "Bu bir fonksiyonlarda harf bulma uygulamasıdır.";

let letter = prompt("Harf söyleyiniz");

let result = findLetter(letter);
alert(`Harf sayısı: ${result}`);

function findLetter(letie) {
  let total = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i).toLowerCase() === letie.toLowerCase()) {
      total += 1;
    } 
  }
  return total;
}
