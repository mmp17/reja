// =================================================================
// D-Task:
// =================================================================

const Shop = require("./section_three/shop");
const shop = new Shop(10, 10, 10);
// const shop2 = new Shop(1, 2, 1);

remainder = shop.remainder();
salesResult = shop.sales("bread", 1);
procurementResult = shop.procurement("bread", 1);
console.log(remainder);
// console.log(salesResult);
// console.log(procurementResult);
// console.log(remainder);

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin,
//biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non,
//5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// =================================================================
// C-Task:
// =================================================================

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin.
// MASALAN checkSimilarity("laepp", "apple") true return qiladi.

// function checkSimilarity(a, b) {
//   let string1 = a.split("").sort().join("");
//   let string2 = b.split("").sort().join("");
//   console.log(string1, string2);

//   if (string1.length === string2.length && string1 == string2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// result = checkSimilarity("kitob", "raffazump");

// console.log(result);
