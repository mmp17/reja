// =================================================================
//A-Task:
// =================================================================

//Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak. Masalan, countLetter("e", "engineer") 3ni return qiladi.

// function countLetter(letter, word) {
//     let count = 0;

//     for (let i=0; i < word.length; i++) {
//       if (letter == word[i]) {
//         count ++
//       }
//     }
//     return count
//   }

//   result = countLetter("f", "muzaffar");

//   console.log(result)

// =================================================================
// B-Task:
// =================================================================

// Shunday function tuzing, u 1ta parametr ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini return qilsin.

// Masalan: getDigits("ag1aw5g6") return qilsin 3

function getDigits(string) {
  let numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let arrayString = string.split("");

  let numOfDigits = 0;
  //console.log(arrayString)

  for (let i = 0; i < numArray.length; i++)
    if (arrayString.includes(numArray[i])) {
      numOfDigits++;
    }
  return numOfDigits;
}

let result = getDigits("0asd1236");
console.log(result);
