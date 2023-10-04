// =================================================================
// F-Task:
// =================================================================

// findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.

// masalan: findDoublers("hello") return true return qiladi

function findDoublers(str) {
  const letterCounter = {};

  for (const letter of str) {
    if (letterCounter[letter]) {
      return true;
    }
    letterCounter[letter] = 1;
  }

  return false;
}

let result = findDoublers("helo");
console.log(result);

// =================================================================
// E-Task:
// =================================================================

// Shunday function tuzing, u bitta string argumentni qabul qilib osh stringni teskari qilib return qilsin
// masalan: getReverse("hello") return qilsin "olleh"

// function getReverse(word) {
//   let result = word.split("").reverse().join("");
//   console.log(result);
// }
// getReverse("hello");
// =================================================================
// Jack Ma maslahatlari: Callback function
// =================================================================

// console.log("Jack Ma maslahatlari");

// const list = [
//   "Yaxshi talaba bo'ling", // 0-20
//   "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//   "O'zingizga ishlashni boshlang", // 30-40
//   "Siz kuchli bo'lgan narsalarni qiling", // 40-50
//   "Yoshlarga investitsiya qiling", // 50-60
//   "Endi dam oling, foydasi yo'q endi", // 60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Enter a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     // callback(null, list[5]);
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("Passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.error("Error:", err);
//   else {
//     console.log("Javob:", data);
//   }
// });
// console.log("Passed here 1");

// OutputL:
// Jack Ma maslahatlari
// Passed here 0
// Passed here 1
// Javob: Endi dam oling, foydasi yo'q endi

//Ordering pizza:
// function orderPizza(callback) {
//   let pizza = "Pizza";
//   setTimeout(() => {
//     console.log(`${pizza} is ready`);
//     callback(pizza);
//   }, 2000);
// }

// function eatPizza(pizza) {
//   console.log(`Eat the ${pizza}`);
// }

// orderPizza(eatPizza);
// console.log("Call to Ahmad");

// =================================================================
// Jack Ma maslahatlari: Asynchronous functionlarni qo'llash
// =================================================================

// async function maslahatBering(a, callback) {
//   if (typeof a !== "number") throw new Error("Enter a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     //using setTimeout with promise
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });

//     // return list[5];
//     // setTimeout(function () { //does not work here
//     //   return list[5];
//     // }, 5000);
//   }
// }

//********* then, catch method *********//
// console.log("Passed here 0");

// maslahatBering(15)
//   .then((data) => {
//     console.log("Answers:", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// console.log("Passed here 1");

//********* async await *********//
// async function run() {
//   let answer = await maslahatBering(15);
//   console.log("Answer:", answer);
//   answer = await maslahatBering(25);
//   console.log("Answer:", answer);
//   answer = await maslahatBering(35);
//   console.log("Answer:", answer);
//   answer = await maslahatBering(45);
//   console.log("Answer:", answer);
//   answer = await maslahatBering(55);
//   console.log("Answer:", answer);
//   answer = await maslahatBering(65);
//   console.log("Answer:", answer);
// }

// run();

//callback hell:
// maslahatBering(15)
//   .then((data) => {
//     maslahatBering(30)
//       .then((data) => {
//         maslahatBering(45)
//           .then((data) => {
//             console.log("Answers:", data);
//           })
//           .catch((err) => {
//             console.log("Error:", err);
//           });
//         console.log("Answers:", data);
//       })
//       .catch((err) => {
//         console.log("Error:", err);
//       });
//     console.log("Answers:", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// async function ni ichida setTimeout kabi core fn lar ishlamaydi!!
// =================================================================
// D-Task:
// =================================================================
// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin,
//biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non,
//5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// const Shop = require("./section_three/shop");
// const shop = new Shop(10, 10, 10);

// remainder = shop.remainder();
// salesResult = shop.sales("bread", 1);
// procurementResult = shop.procurement("bread", 1);
// console.log(remainder);
// console.log(salesResult);
// console.log(procurementResult);
// console.log(remainder);

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
