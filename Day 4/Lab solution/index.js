// ####################### lab1 #######################
// function find(sentence, letter) {
//   if (typeof sentence !== "string") return -1;
//   var positions = [];

//   for (var i = 0; i < sentence.length; i++)
//     if (sentence[i] === letter) positions.push(i);

//   return positions;
// }
// console.log(find("sentence", "e"));

// ####################### lab2 #######################
//  function checkDivisibility(num) {
//   if (typeof num !== "number" || isNaN(num)) return -1;

//   return num % 3 === 0 && num % 5 === 0
//     ? "fizzbuzz"
//     : num % 3 === 0
//     ? "fizz"
//     : num % 5 === 0
//     ? "buzz"
//     : "none";
// }

// console.log(checkDivisibility(3));
// console.log(checkDivisibility(5));
// console.log(checkDivisibility(15));
// console.log(checkDivisibility(2));

// ####################### lab3 #######################
// function readNumbers(n) {
//   var nums = [];

//   for (var i = 0; i < n; ) {
//     var input = Number(prompt("Enter number"));
//     if (isNaN(input)) {
//       alert("Invalid input, please enter valid number");
//       continue;
//     }
//     nums.push(input);
//     i++;
//   }

//   return nums;
// }

// function mathOperations() {
//   var nums = readNumbers(3);
//   var sum = 0,
//     mul = 1,
//     div = nums[0] * nums[0];

//   for (var i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     mul *= nums[i];
//     if (nums[i] !== 0) div /= nums[i];
//   }

//   document.writeln("summition of 3 values " + sum + " <br>");
//   document.writeln("multiplication of 3 values " + mul + " <br>");
//   document.writeln("division of 3 values " + div + " <br>");
// }

// mathOperations();

// ####################### lab4 #######################

// function ascendingCompare(a, b) {
//   return a - b;
// }

// function desCompare(a, b) {
//   return b - a;
// }

// function sortAscendingAndDes() {
//   var nums = readNumbers(5);

//   document.writeln("u've entered nums " + nums.join(", ") + "<br>");
//   document.writeln("asc " + nums.sort(ascendingCompare).join(", ") + "<br>");
//   document.writeln("desc  " + nums.sort(desCompare).join(", ") + "<br>");
// }

// sortAscendingAndDes();

// ####################### Learn #######################
