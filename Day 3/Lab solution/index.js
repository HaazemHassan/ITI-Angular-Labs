//task1
// var message = prompt("Please enter a message:");
// for (var i = 1; i <= 6; i++) {
//   document.writeln("<h" + i + ">" + message + " " + i + "</h" + i + ">");
// }

// ###########################################
//task2
// var n = Number(prompt("Enter number of numbers"));
// var sum = 0;

// while (n > 0 && sum <= 100) {
//   var number = Number(prompt("please enter a number"));

//   if (isNaN(number)) {
//     alert("enter a valid number");
//     continue;
//   }

//   if (number === 0) break;

//   sum += number;
//   n--;
// }

// alert("Sum = " + sum);

// ###########################################
//task3
// var string = prompt("Enter a string");
// counter = 0;
// for (var i = 0; i < string.length; i++) if (string[i] == "e") counter++;

// alert("number of 'e' in the string = " + counter);

// ###########################################
// task4

var string = prompt("enter a string");
var caseSensitive = confirm("case sensitive?");
var isPalindrome = true;

if (!caseSensitive) string = string.toLowerCase();

for (var i = 0, j = string.length - 1; i < j; i++, j--)
  if (string[i] !== string[j]) {
    isPalindrome = false;
    break;
  }

isPalindrome
  ? alert("The string is a palindrome")
  : alert("The string is not a palindrome");
