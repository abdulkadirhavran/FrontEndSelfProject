const openModalBtnElement = document.querySelector("#openModal");
const modalElement = document.querySelector(".modal");
const modalContentElement = modalElement.querySelector(".modal_content"); 

openModalBtnElement.addEventListener("click", () => {
  modalElement.classList.add("open");
});

modalContentElement.addEventListener('click',() => {
    modalElement.classList.remove('open');
});

/*    ANLATIMI 

Yazdığınız kod parçası, HTML'de belirli bir düğme üzerine tıklandığında bir modal penceresini açan ve modal içeriği üzerine tıklandığında modal penceresini kapatan bir işlevselliği gerçekleştiriyor.

Burada `querySelector` yöntemi ile belirli HTML elementlerini seçiyorsunuz:

- `openModalBtnElement`, `#openModal` id'sine sahip olan düğmeyi seçer.
- `modalElement`, `.modal` sınıfına sahip olan modal pencere elementini seçer.
- `modalContentElement`, `.modal_content` sınıfına sahip olan modal içeriği elementini seçer.

Sonra, `addEventListener` yöntemi kullanılarak olay dinleyicileri eklenir:

- `openModalBtnElement.addEventListener("click", ...)`, "click" olayını dinler ve düğme tıklandığında çalışan bir işlev atanır. Bu işlev, modalElement'e "open" sınıfını eklemek için `classList.add("open")` yöntemini kullanır. Böylece modal penceresi görünür hale gelir.
- `modalContentElement.addEventListener('click', ...)` , "click" olayını dinler ve içerik alanı tıklandığında çalışan bir işlev atanır. Bu işlev, modalElement'ten "open" sınıfını kaldırmak için  classList.remove('open') yöntemini kullanır. Böylece modal penceresi gizlenir.

Bu şekilde açma ve kapatma fonksiyonelliği sağlanmış olur. */



/* JavaScript'te `classList.add` metodu, bir HTML elementine bir veya birden fazla sınıf adı eklemek için kullanılır. Bu metodun amacı, belirli bir elementin class attribute'una yeni sınıflar eklemektir.

`classList` özelliği, bir elementin class attribute'una erişmek ve üzerinde işlemler yapmak için kullanılır. `add` metodu, bu `classList` özelliğinin bir parçasıdır ve aşağıdaki gibi kullanılır:

```javascript
element.classList.add(class1, class2, ...);
```

Burada `element`, üzerinde işlem yapmak istediğiniz HTML elemanına referans veren bir değişkendir. `class1`, `class2`, vb. ise eklemek istediğiniz sınıfların adlarıdır.

İşte basit bir örnek:

```javascript
var button = document.querySelector("button");

button.addEventListener("click", function() {
  button.classList.add("active");
});
```

Bu örnekte, `<button>` elementini seçtik ve üzerine tıklama olayı ekledik. Tıklama olduğunda "active" adlı sınıfı bu düğmenin class listesine (`classList`) ekledik. Böylece düğme aktif hale getirildi ve CSS tarafından stil uygulanabilir hale geldi.

Eğer birden fazla sınıf eklemek isterseniz, her yeni sınıf adını virgülle ayırarak `add` metodu içinde belirtmelisiniz:

```javascript
element.classList.add("class1", "class2", "class3");
```

Not: Eğer belirtilen sınıflardan herhangi biri zaten varsa veya geçersiz karakterler içeriyorsa (`-`,`_`,`*`, vb.), bu metot otomatik olarak onları dikkate almayacaktır. */
