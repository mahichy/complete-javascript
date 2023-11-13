// truthy and falsy values
// 5 falsy values: 0,"", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

let money = 123;
if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a job.");
}

let height = 0;
if (height) {
  console.log("YAY! height is defined");
} else {
  console.log("Height is undefined");
}
