// =================================================================
// C-Task:
// =================================================================

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin.
// MASALAN checkSimilarity("laepp", "apple") true return qiladi.

function checkSimilarity(a, b) {
  let string1 = a.split("").sort().join("");
  let string2 = b.split("").sort().join("");
  console.log(string1, string2);

  if (string1.length === string2.length && string1 == string2) {
    return true;
  } else {
    return false;
  }
}
result = checkSimilarity("kitob", "raffazump");

console.log(result);
