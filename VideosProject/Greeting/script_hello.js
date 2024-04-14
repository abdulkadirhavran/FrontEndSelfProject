const btnElement = document.querySelector("button");
const spanElement = document.querySelector("span");

btnElement.addEventListener("click", () => {
  const yourName = prompt(`Please enter your name:`);
  spanElement.textContent = yourName; // Burada textcontent yerine innerHMTL ve innerText de yazılabilir.
});

/*  JavaScript'te `querySelector` metodu, belirli bir CSS seçicisini kullanarak bir HTML elemanını seçmek için kullanılır. 
Bu metodun temel amacı, DOM (Document Object Model) üzerinde elementleri bulmak ve bu elementler üzerinde işlemler yapmaktır.
`querySelector` metodu, belirtilen CSS seçicisine (örneğin, etiket adı, sınıf adı veya id gibi) uygun olan ilk elementi döndürür. Eğer hiçbir element bulunmazsa `null` değeri döner.

İşte basit bir örnek:

```javascript
var button = document.querySelector(".myButton");

button.addEventListener("click", function() {
  console.log("Button clicked!");
});
```

Bu örnekte, `.myButton` sınıfına sahip olan ilk düğme elemanını (``) seçmek için `querySelector` metodunu kullandık. Ardından bu düğme üzerine bir tıklama olayı ekledik ve tıklama olduğunda konsola "Button clicked!" yazdırdık.

Bu yöntemle aşağıdaki gibi farklı CSS seçicileri de kullanabilirsiniz:
- Etiket adı: `"div"`, `"p"`, `"a"` vb.
- Sınıf adı: `".className"`
- ID: `"#elementID"`
- Özellik: `[attribute]`, `[attribute=value]`
- Kombinasyonlar: `.class1.class2`, `.class1 .class2`

Bir sayfadaki birden fazla elemana erişmek veya daha spesifik eşlemeler yapmak istediğinizde ise `querySelectorAll` metodunu kullanabilirsiniz. Bu metot ile tüm eşleşen elemanlar NodeList olarak alınır. */
