//================================================================
//Modul package CORE
//================================================================

// using modul setTimeout

// setTimeout(function () {
//   console.log("Ishga tushdi");
// }, 5000);

// using modul setInterval. it works as loop

// let number = 0;

// setInterval(function () {
//   console.log("Hisob", number);
//   number++;
// }, 1000);

// Hisob 0
// Hisob 1
// Hisob 2
// Hisob 3
// Hisob 4

//================================================================
// Model Package FILE
//================================================================
//(1)
// const fs = require("fs");
// const data = fs.readFileSync("./section_three/input.txt", "utf8");
// console.log(data);

// console.log("********************************");
//(2)
// fs.writeFileSync("./input.txt", `${data} \n\t\t by Joseph WebDev`);
// const new_data = fs.readFileSync("./input.txt", "utf8");
// console.log(new_data);

//What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

//(3)
// Using Calculator File module

// const calculate = require("./section_three/calculator");

// let multiplied = calculate.multiply(80, 20);
// let divided = calculate.divide(80, 20);
// let added = calculate.add(80, 20);
// let subtracted = calculate.subtract(80, 20);

// console.log(multiplied); //1600
// console.log(divided); //4
// console.log(added); //100
// console.log(subtracted); //60

//(4)

//================================================================
// Model Package External
//================================================================

//npm install moment --save --save=> projectni uziga install qiladi
//https://momentjs.com/docs/

//const moment = require("moment");

//(1)
//const time = moment().format("YYYY-MM-DD");
//console.log(time); //2023-09-16

//(2)
// setInterval(function () {
//   const time = moment().format("YYYY-MM-DD HH:mm:ss");
//   console.log("Current Time:", time);
// }, 1000);

//(3) Inquirer.js - A collection of common interactive command line user interfaces.

// const inquirer = require("inquirer");

// inquirer
//   .prompt([{ type: "input", name: "ism", message: "What is your name?" }])
//   .then((answers) => {
//     console.log("Value of the key(name) of the object", answers.ism);
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

//(4) validator.js - A library of string validators and sanitizers.

// var validator = require("validator");
// //result = validator.isEmail("foo@bar.com"); //=> true
// result = validator.isEmail("foo@barcom"); //=> false
// console.log(result);

//(4) uuid.js - For the creation of RFC4122 UUIDs

// const { v4: uuidv4 } = require("uuid");
// const id = uuidv4();
// console.log(id); // ⇨ ff8373b7-e25d-488e-b41f-a38fe870072f

//(5) chalk - Terminal string styling

// const chalk = require("chalk");
// console.log(
//   chalk.blue("Welcome ") + chalk.yellow("Students") + chalk.green("!!!")
// );
