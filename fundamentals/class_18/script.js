let name = "sara";
let age = 14;
// let isOldEnough = age >= 18;

if (age >= 18) {
  console.log(`${name} can start driving license 🚘.`);
} else {
  let yearsLeft = 18 - age;
  console.log(`${name} is too young. Wait another ${yearsLeft} years`);
}

let birthYear = 1982;
let century;
if (birthYear <= 2023) {
  century = 21;
} else {
  century = 20;
}
console.log(century);
