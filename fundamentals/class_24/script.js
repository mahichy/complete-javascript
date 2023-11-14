let hasDriversLicense = true;
let hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sara is able to drive");
// } else {
//   console.log("Someone else should drive.....");
// }

let isTired = false;
console.log(!isTired);
console.log(hasDriversLicense && hasGoodVision & isTired);

// if (hasDriversLicense && hasGoodVision && isTired) {
if ((hasDriversLicense && hasGoodVision) || isTired) {
  console.log("Sara is able to drive");
} else {
  console.log("Someone else to drive......");
}

let passport = true;
let visa = true;
let airTicket = false;

if (passport && visa && airTicket) {
  console.log("Time to go abroad.");
} else {
  console.log("Something wrong here check your Visa Passport and AirTicket");
}

// Phone
let mobile = true;
let sim = true;
let balance = false;
let registerd = false;
if ((mobile && sim && balance) || registerd) {
  console.log("You can call any number.");
} else {
  console.log("Please check ur phone balance.");
}
