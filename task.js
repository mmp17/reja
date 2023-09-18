// =================================================================
// Task: Rendom number
// =================================================================

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

const x = Math.floor(101 * Math.random());
console.log(x);

let inquirer = require("inquirer");

run()
  .then(() => console.log("bajarildi"))
  .catch((err) => console.log(err));

async function run() {
  try {
    const answer = await inquirer.prompt([
      { type: "input", name: "raqam", message: "raqamni toping? " },
    ]);
    console.log(answer.raqam);
    guessNumber(x, answer);
  } catch (err) {
    throw err;
  }
}

function guessNumber(x, answer) {
  while (x !== answer) {
    console.log("You guessed wrong number.");
  }

  // check if the guess is correct
  if (x == answer) {
    console.log("You guessed the correct number.");
  }

  //   if (x == answer) {
  //     console.log("1 ta urinishda togri topdingiz");
  //   } else {
  //     if (x > answer) {
  //       console.log(`Rendom son ${answer} dan katta`);
  //     } else if (x < answer) {
  //     }
  //   }
}

// call the function
guessNumber();
