// let i =0;

// do{
// console.log(i);
// i++;
// }while (i< 10)

// console.log("*********************")

// while (i< 10) {
// console.log(i);
// i++;

// break and continue
// for (let i = 0;i <10;i++) {
//     if (i === 5) {
//         console.log("Five");
//         continue;
//         break;
//     }
//     console.log(i);
// }

// function with parameter
function mySelf(name) {
  console.log("My name is John ");
}

mySelf("John Doe");
mySelf("Tracy Ekua");

function add(x, y) {
  let sum = x + y;
  console.log(sum);
}

add(5, 6);
add(6, 7);
add(7, 8);

function multiplication(x, y) {
  let mult = x * y;
  console.log(mult);
}

multiplication(8, 5);
multiplication(3, 4);
multiplication(2, 3);

// function with return value
function add(x, y) {
  let sum = x + y;
  return sum;
}

let result = add(10, 15);
let newResult = result * 2;
console.log(newResult);

// arrow function
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;
console.log(divide(10, 5));
console.log(multiply(10, 5));

// Higher Order Function

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = numbers.map((number) => number * number);
console.log(squares);

let addition = numbers.map((number) => number + number);
console.log(addition);

let evens = numbers.filter((number) => numbers % 2 === 0);
console.log(evens);

let odds = numbers.filter((number) => numbers % 2 !== 0);
console.log(odds);

let Five = numbers.find((num) => num === 11);
console.log(Five);

// string
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.length);
console.log(sentence.charCodeAt(10));
console.log(sentence.concat("from concaternation"));
console.log(sentence.endsWith("dog"));
console.log(sentence.includes("hardworking"));
console.log(sentence.indexOf("brown"));
console.log(sentence.indexOf("o, 13"));
console.log(sentence.lastIndexOf("O"));
console.log(sentence.padStart(10));
console.log(sentence.padEnd(10));
console.log(sentence.repeat(2));
console.log(sentence.replace("lazy" + "hardworking"));
console.log(sentence.slice(20, 30));
console.log(sentence.substring(20, 30));

let email ="kofi@gmail.com"
console.log(sentence.split("@"));
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

