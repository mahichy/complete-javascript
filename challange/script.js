// Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
// let massMark = 78;
// let hightMark = 1.69;
// let massJohn = 92;
// let hightJohn = 1.95;

let massMark = 95;
let hightMark = 1.88;
let massJohn = 85;
let hightJohn = 1.76;

let BMIMark = massMark / hightMark ** 2;
let BMIJohn = massJohn / (hightJohn * hightJohn);
let largerBmi = BMIMark > BMIJohn;
console.log(largerBmi);
let total = BMIJohn + BMIMark;
let average = (BMIMark + BMIJohn) / 2;
console.log(BMIMark, BMIJohn, total, average);
