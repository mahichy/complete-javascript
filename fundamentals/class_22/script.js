// equality operators
let age = "18";
if (age === 18) console.log("You just bocome an adult");

if (age == 18) console.log("You just bocome an adult (loose)");

let favourite = Number(prompt("what's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 also a cool number");
} else if (favourite === 9) {
  console.log("9 also a cool number");
} else {
  console.log("This is not 23,7,9 pls select one of them.");
}

if (favourite !== 23) console.log("Why not 23?");
