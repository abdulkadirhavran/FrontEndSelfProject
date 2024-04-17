const newColorButton = document.getElementById("newColor-button");
const currentColor = document.getElementById("current-color");

const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function generateHex() {
  let randomIndexPosition = Math.floor(Math.random() * hexValues.length);
  const randomHexValue = hexValues[randomIndexPosition];

  return randomHexValue;
}
/* Bu kod parçası, hexValues dizisindeki elemanlardan rastgele bir indeks seçerek rastgele bir HEX renk değeri oluşturan `generateHex` işlevini içerir.

İşlevin çalışma mantığı şu şekildedir:

- `Math.random()` işlevi, 0 ile 1 arasında rastgele bir ondalık sayı üretir.
- `hexValues.length` ifadesi, hexValues dizisinin uzunluğunu temsil eder. Bu durumda, 16'dır.
- `(Math.random() * hexValues.length)` ifadesi, 0 ile 15 arasında rastgele bir sayı üretir (16 dahil değil).
- `Math.floor()` işlevi bu rastgele sayının tam kısmını alır ve onu en yakın küçük tamsayıya yuvarlar. Yani, 0 ile (hexValues.length - 1) arasında bir tam sayı elde edilir.
- Bu tam sayıyı kullanarak `hexValues` dizisinden ilgili indeksteki değeri alır ve `randomHexValue` değişkenine atar.
- Son olarak, oluşturulan rastgele HEX renk değerini döndürür.

Böylece `generateHex()` işlevi her çağrıldığında farklı bir HEX renk değeri döndürür. */

function getRandomHexString(stringLength) {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) {
    hexString += generateHex();
  }

  return hexString;
}
/* Bu kod parçası, belirli bir uzunlukta rastgele bir HEX dizesi oluşturmak için `generateHex()` işlevini kullanarak `getRandomHexString` işlevini içerir.

İşlevin çalışma mantığı şu şekildedir:

- Bir dize değişkeni olan `hexString` tanımlanır.
- `for` döngüsü, belirtilen uzunluğa (`stringLength`) kadar çalışır.
- Her iterasyonda, `generateHex()` işlevi çağrılır ve döndürülen rastgele HEX renk değeri `hexString` değişkenine eklenir.
- Döngünün tamamlanmasının ardından, oluşturulan rastgele HEX dizesi olan `hexString` değeri döndürülür.

Örneğin, eğer `getRandomHexString(6)` çağrılırsa, 6 karakterlik bir rastgele HEX dizesi üretilecektir. Bu kod parçası aynı zamanda kullanıcı tarafından belirlenen herhangi bir uzunlukta rastgele HEX dizelerini üretmek için kullanılabilir. */



newColorButton.addEventListener("click", () => {
  const randomHexString = "#" + getRandomHexString(6);

  document.body.style.setProperty("background-color", randomHexString);
  // document.body.style.backgroundColor = randomHexString;

  currentColor.textContent = randomHexString;
});

/* 
Bu kod parçası, bir düğmeye tıklandığında rastgele bir HEX renk kodu oluşturarak arka plan rengini ve mevcut renk değerini değiştiren bir işlevselliği gerçekleştiriyor.

İlk olarak `getElementById` metodu kullanılarak belirli HTML elementlerine referans veriliyor:

- `newColorButton`, "newColor-button" id'sine sahip düğmeyi seçmek için kullanılır.
- `currentColor`, "current-color" id'sine sahip elementi seçmek için kullanılır.

Sonra, ihtiyaç duyulan yardımcı işlevler tanımlanır:

- `generateHex` fonksiyonu, hexValues dizisinden rastgele bir indeksi seçerek rastgele bir HEX değeri oluşturur. Bu fonksiyon, generateHex() çağrıldığında rastgele bir HEX değeri döndürür.
- `getRandomHexString` fonksiyonu ise, belirli bir uzunlukta (6) rastgele bir HEX dizesi oluşturmak için generateHex() işlevini kullanır. Bu fonksiyon, getRandomHexString(6) çağrıldığında 6 karakterlik bir rastgele HEX dizesi döndürür.

Daha sonra, `addEventListener` yöntemi ile olay dinleyicisi eklenir:

- `newColorButton.addEventListener('click', () => { ... })`, "click" olayını dinler ve düğmeye tıklandığında çalışan anonim bir işlev atanır. İşlevin içinde şunlar yapılır:
   - Rastgele 6 karakterlik (HEX formatına uygun) yeni bir renk kodunu almak için getRandomHexString(6) kullanılır.
   - document.body.style.setProperty('background-color', randomHexString) ile arka plan rengini yeni renk koduna ayarlanır.
   - currentColor.textContent = randomHexString ile mevcut renk değerinin gösterildiği elementin içeriği güncellenir.

Bu şekilde her tıklandığında farklı ve rastgele bir arka plan rengi oluşacak ve bu renk değeri de mevcut renk olarak görüntülenecektir. */
