// ############ 1 ###########
let x = 1;
let y = 2;
[x, y] = [y, x];

// ############ 2 ###########
function findMinMax(...numbers) {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return { min, max };
}

const array = [4, 2, 9, 1, 7];
const { min, max } = findMinMax(...array);

console.log("Min value", min);
console.log("Max value", max);

// ############ 3 ###########
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

var isString = fruits.every((element) => typeof element === "string");
var startWithA = fruits.some((element) => element.startsWith("a"));
var startsWith_B_Or_S = fruits.filter(
  (element) => element.startsWith("b") || element.startsWith("s")
);
const likedFruits = fruits.map((fruit) => `I like ${fruit}`);
likedFruits.forEach((fruit) => console.log(fruit));

// ############ 4 ###########
function positiveNumbers(...numbers) {
  return numbers.filter((num) => num > 0);
}

// ############ 5 ###########
function sum(numbers) {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// ############ 6 ###########
function capitalizeNames(names) {
  return names.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
}
// ############ 7 ###########
function isLowerCase(str) {
  return str === str.toLowerCase();
}

// ############ 8 ###########
const filterLongStrings = (strings, length) => {
  return strings.filter((str) => str.length > length);
};
