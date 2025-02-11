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

//let x = 10;
// {
//     let x = 20;
//     console.log(x);
// }
// console.log(x);

//

//What happens if you declare a variable with var inside a block? How is it different from let?
// {
//   var x = 10;
// }
// console.log(x);

//

// let x = 0;
// console.log(x++);
// console.log(++x);

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
//   for (let j = 1; j <= 3; j++) {
//       if (i === j) continue;
//       console.log(i, j);
//   }
// }

//output of
// let value = 2;

// switch(value) {
//   case 1:
//       console.log("Case 1");
//   case 2:
//       console.log("Case 2");
//   case 3:
//       console.log("Case 3");
//       break;
//   default:
//       console.log("Default case");
// }

//output of

// for (let i = 0; i < 5; i++) {
//   switch(i) {
//       case 2:
//           console.log("Hit case 2, continuing...");
//           continue;
//       case 3:
//           console.log("Hit case 3");
//           break;
//       default:
//           console.log("Default case: " + i);
//   }
// }

//output of

// let arr = [1, 2, 3, 2, 4, 1, 5];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//           arr.splice(j, 1);
//           j--;
//           continue;
//       }
//   }
// }

// console.log(arr);

// output of

// let x = 10;
// let y = x > 5 && x < 15 ? "Within range" : "Out of range";
// console.log(y);
