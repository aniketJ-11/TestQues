let value = null ?? "default";
console.log(value);
//
console.log(0 || "fallback");
console.log(0 ?? "fallback");
//
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Yellow");
    break;
  case "apple":
    console.log("Red");
    break;
  default:
    console.log("Unknown");
}

//

console.log(true || (false && false));
//

// output of
// let x = 10;
// let y = 5;
// let result = x > y ? x < 15 ? "A" : "B" : "C";
// console.log(result);

// output of
//for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         if (i === j) break;
//         console.log(i, j);
//     }
// }
