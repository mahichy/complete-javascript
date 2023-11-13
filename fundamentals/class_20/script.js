// Type conversion and coercion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

console.log("I am " + 23 + " Years old");
console.log(`I am 23 Years old`);

console.log("23" + "10");
console.log("23" - "10");
console.log("23" / "10");

let n = "1" + 1;
n = n - 1;
console.log(n);
