// Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
// let massMark = 78;
// let hightMark = 1.69;
// let massJohn = 92;
// let hightJohn = 1.95;

// challange 1
// let massMark = 95;
// let hightMark = 1.88;
// let massJohn = 85;
// let hightJohn = 1.76;

// let BMIMark = massMark / hightMark ** 2;
// let BMIJohn = massJohn / (hightJohn * hightJohn);
// let largerBmi = BMIMark > BMIJohn;
// console.log(largerBmi);
// let total = BMIJohn + BMIMark;
// let average = (BMIMark + BMIJohn) / 2;
// console.log(BMIMark, BMIJohn, total, average);

// challange 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}

// "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!"
