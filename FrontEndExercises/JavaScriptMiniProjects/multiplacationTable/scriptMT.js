// Çarpım tablosu

for (let i = 0; i <= 11; i++) { // İlk döngü
  if (i == 11) break; //i 11'e eşitlendiğinde döngü kırıldı.
  for (let z = 0; z <= 15; z++) {
    console.log(`${i} x ${z} işlem sonucu:` + i * z);
  }
  console.log("------------------------------");
}
